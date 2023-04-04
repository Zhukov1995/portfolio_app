import { useDispatch } from 'react-redux';
import { setTargetProject, setTopPosition } from '../../Store/actions';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import Folder from './folder.svg';
import './portfolio-card.scss';

export const PortfolioCard = forwardRef(({item},ref) => {
    const dispatch = useDispatch();

    // ниже при клике на карточку мы записываем ее позицию относительно главной страницы, чтобы потом вернуться на эту же позицию
    // а так же устанавливаем текущий проект

    return (
        <Link ref={ref} to="/portfolio" className='link_router' onClick={() => dispatch(setTopPosition(window.scrollY))}>
            <div className='portfolio_card' onClick={() => dispatch(setTargetProject(item))}>
                <img src={Folder} alt='folder-img'/>
                <h3>{item.title}</h3>
                <p className='description'>{item.shortDescription}</p>
                <p className='stack'>{item.stack.join(' ')}</p>
            </div>
        </Link>
    )
})

export const MPortfolioCard = motion(PortfolioCard);