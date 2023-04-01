import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Title from '../../UI/Title/title';
import Arrow from './arrow.svg';
import './portfolio.scss';
import { setFlagBtn } from '../../Store/actions';
import { motion } from 'framer-motion';

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

    const PortfolioAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2}
        })
    }

    const imageList = images.map((item,index) => {
        return <motion.img
                    src={item} 
                    alt={`${title} скриншот`}
                    key={index}
                    variants={PortfolioAnimation}
                    custom={index + 8}
                    />
    })

    const stackList = stack.map((item, index) => {
        return <li className='stack_list_item' key={index}>{item}</li>
    })


    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className='portfolio'
        >
            <motion.div
                variants={PortfolioAnimation}
                custom={1}
                className='portfolio_arrow'
            >
                <img src={Arrow} className="arrow" alt='arrow'/>
                <Link to="/">на главную</Link>
            </motion.div>
            <motion.div variants={PortfolioAnimation} custom={2}>
                <Title title={title}/>
            </motion.div>
            <motion.div
                variants={PortfolioAnimation}
                custom={3}
                className='portfolio_info'
            >
                <motion.h3
                    variants={PortfolioAnimation}
                    custom={4}
                    className='portfolio_subtitle'
                >Описание проекта</motion.h3>
                <motion.p
                    variants={PortfolioAnimation}
                    custom={5}
                    className='text_md'>{description}</motion.p>
            </motion.div>
            <motion.div
                variants={PortfolioAnimation}
                custom={6}
                className='portfolio_info'
            >
                <h3 className='portfolio_subtitle'>Особенности проекта</h3>
                <p className='text_md'>{features}</p>
            </motion.div>
            <motion.div
                variants={PortfolioAnimation}
                custom={7}
                className='portfolio_stack'
            >
                <h3 className='portfolio_subtitle'>Стек проекта</h3>
                <ul className='portfolio_stack_list'>
                    {stackList}
                </ul>
            </motion.div>
            {imageList}
            <span>Ссылка на проект:<a href={link} target="_blank">{link}</a></span>
        </motion.div>
    )
}

export default Portfolio;