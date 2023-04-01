import { useDispatch } from 'react-redux';
import { setTargetProject, setTopPosition } from '../../Store/actions';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import Folder from './folder.svg';
import './portfolio-card.scss';

export const PortfolioCard = forwardRef(({item},ref) => {

const dispatch = useDispatch();

const stackList = item.stack.map((item,index) => {
    return <li key={index}>{item}</li>
})

    return (
        <Link ref={ref} to="/portfolio" className='link_router' onClick={() => dispatch(setTopPosition(window.scrollY))}>
            <div className='portfolio_card' onClick={() => dispatch(setTargetProject(item))}>
                <img src={Folder} alt='folder-img'/>
                <h3>{item.title}</h3>
                <p className='description'>{item.shortDescription}</p>
                <ul>
                    {stackList}
                </ul>
            </div>
        </Link>
    )
})

export const MPortfolioCard = motion(PortfolioCard);