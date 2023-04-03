import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, redirect } from 'react-router-dom';
import Title from '../../UI/Title/title';
import { setFlagBtn, setTargetProject } from '../../Store/actions';
import { motion } from 'framer-motion';
import Arrow from './arrow.svg';
import './portfolio.scss';
import './portfolio.media.scss';
import ButtonScrollTop from '../../UI/ButtonScrollTop/buttonScrollTop';


const Portfolio = () => {
    const targetProject = useSelector(state => state.targetProject);
    const { title, description, features, stack, images, link, repo } = targetProject;
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0,0);
        dispatch(setFlagBtn(true));
        return () => {
            dispatch(setFlagBtn(false));
        }
    }, [dispatch]);

    // если пользователь обновил страницу мы проверяем пришедшие данные из localStorage и устанавливаем их в state
    // если пользователь не обновил, а просто вышел назад то данные нам не понадобятся и мы их удаляем из localStorage
    useEffect(() => {
        if(localStorage.getItem('target') !== null) {
            const target = JSON.parse(localStorage.getItem('target'));
            dispatch(setTargetProject(target))
        }
        return () => {
            localStorage.removeItem('target')
        }
    }, [])

    // если пользователь обновил именно target страницу, то мы записываем в localStorage на какой именно странице он был
    window.addEventListener('unload', () => {
        if (window.location.href === 'https://portfolio-app-woad-eight.vercel.app/portfolio') {
            localStorage.setItem('target', JSON.stringify(targetProject))
        }
    })

    const PortfolioAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.15}
        })
    }

    const imageList = images.map((item,index) => {
        return <motion.img
                    src={item} 
                    alt={`${title} скриншот`}
                    key={index}
                    variants={PortfolioAnimation}
                    custom={index + 6}
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
            <div className='portfolio_arrow'>
                <img src={Arrow} className="arrow" alt='arrow'/>
                <Link to="/">на главную</Link>
            </div>
            <motion.div variants={PortfolioAnimation} custom={1}>
                <Title title={title}/>
            </motion.div>
            <motion.div
                variants={PortfolioAnimation}
                custom={1}
                className='portfolio_info'
            >
                <motion.h3
                    variants={PortfolioAnimation}
                    custom={2}
                    className='portfolio_subtitle'
                >Описание проекта</motion.h3>
                <motion.p
                    variants={PortfolioAnimation}
                    custom={3}
                    className='text_md'>{description}</motion.p>
            </motion.div>
            <motion.div
                variants={PortfolioAnimation}
                custom={4}
                className='portfolio_info'
            >
                <h3 className='portfolio_subtitle'>Особенности проекта</h3>
                <p className='text_md'>{features}</p>
            </motion.div>
            <motion.div
                variants={PortfolioAnimation}
                custom={5}
                className='portfolio_stack'
            >
                <h3 className='portfolio_subtitle'>Стек проекта</h3>
                <ul className='portfolio_stack_list'>
                    {stackList}
                </ul>
            </motion.div>
            {imageList}
            <span>Ссылка на проект:<a href={link} target="_blank">{link}</a></span>
            <span>Ссылка на репозиторий:<a href={repo} target="_blank">{repo}</a></span>
            <ButtonScrollTop/>
        </motion.div>
    )
}

export default Portfolio;