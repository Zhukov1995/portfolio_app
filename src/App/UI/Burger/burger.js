import { useDispatch, useSelector } from 'react-redux';
import { toggleBurgerMenu } from '../../Store/actions';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import './burger.scss';

export const Burger = forwardRef((props,ref) => {
    const burger = useSelector(state => state.burger);
    const dispatch = useDispatch();

    const classWrapperBurger = burger ? "wrapper-menu open" : "wrapper-menu"

    return (
        <div ref={ref} className={classWrapperBurger} onClick={() => dispatch(toggleBurgerMenu())}>
            <div className="line-menu half start"></div>
            <div className="line-menu"></div>
            <div className="line-menu half end"></div>
        </div>  
    )
})

export const MBurger = motion(Burger);