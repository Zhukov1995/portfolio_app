import Navigation from '../Navigation/navigation';
import Burger from '../UI/Burger/burger';
import Logo from './logo.svg';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <header>
            <Link to="/"><img src={Logo}/></Link>
            <Burger/>
            <Navigation/>   
        </header>
    )
}

export default Header;