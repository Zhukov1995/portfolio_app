import Navigation from '../Navigation/navigation';
import { MBurger } from '../UI/Burger/burger';
import Logo from './logo.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './header.scss';
import './header.media.scss';

const Header = () => {

    const headerAnimation = {
        hidden: {
            y: -100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.35}
        })
    }

    return (
        <motion.header
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
        >
            <Link to="/">
                <motion.img src={Logo} variants={headerAnimation} custom={2}/>
            </Link>
            <MBurger variants={headerAnimation} custom={2}/>
            <Navigation/>   
        </motion.header>
    )
}

export default Header;