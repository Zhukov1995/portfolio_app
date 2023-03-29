import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Title from '../../UI/Title/title';
import Arrow from './arrow.svg';
import './portfolio.scss';
import { setFlagBtn } from '../../Store/actions';

const Portfolio = () => {
    const targetProject = useSelector(state => state.targetProject);
    const { title, description, features, stack, images, link } = targetProject;
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0,0);
        dispatch(setFlagBtn(true));
        return () => {
            dispatch(setFlagBtn(false));
        }
    }, [dispatch]);

    const imageList = images.map((item,index) => {
        return <img src={item} alt={`${title} скриншот`} key={index}/>
    })

    console.log('portfolio render');

    const stackList = stack.map((item, index) => {
        return <li className='stack_list_item' key={index}>{item}</li>
    })

    return (
        <div className='portfolio'>
            <div className='portfolio_arrow'>
                <img src={Arrow} className="arrow" alt='arrow'/>
                <Link to="/">на главную</Link>
            </div>
            <Title title={title}/>
            <div className='portfolio_info'>
                <h3 className='portfolio_subtitle'>Описание проекта</h3>
                <p className='text_md'>{description}</p>
            </div>
            <div className='portfolio_info'>
                <h3 className='portfolio_subtitle'>Особенности проекта</h3>
                <p className='text_md'>{features}</p>
            </div>
            <div className='portfolio_stack'>
                <h3 className='portfolio_subtitle'>Стек проекта</h3>
                <ul className='portfolio_stack_list'>
                    {stackList}
                </ul>
            </div>
            {imageList}
            <span>Ссылка на проект:<a href={link} target="_blank">{link}</a></span>
        </div>
    )
}

export default Portfolio;