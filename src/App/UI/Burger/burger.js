import { useDispatch, useSelector } from 'react-redux';
import { toggleBurgerMenu } from '../../Store/actions';
import './burger.scss';

const Burger = () => {
    const burger = useSelector(state => state.burger);
    const dispatch = useDispatch();

    const classWrapperBurger = burger ? "wrapper-menu open" : "wrapper-menu"

    return (
        <div className={classWrapperBurger} onClick={() => dispatch(toggleBurgerMenu())}>
            <div className="line-menu half start"></div>
            <div className="line-menu"></div>
            <div className="line-menu half end"></div>
        </div>  
    )
}

export default Burger;