import Navigation from '../Navigation/navigation';
import { useState } from 'react';
import { MBurger } from '../UI/Burger/burger';
import Logo from './logo.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './header.scss';
import './header.media.scss';
import { useSelector } from 'react-redux';

const Header = () => {
    const burger = useSelector(state => state.burger);
    const [oldScrollPosition,setOldScrollPosition] = useState(0);
    const [flagPosition,setFlagPosition] = useState(true);
  
    window.onscroll = () => {
        const scrollTopPosition = document.documentElement.scrollTop;
        if ((oldScrollPosition > scrollTopPosition) && scrollTopPosition > 200) {
            setFlagPosition(true);
        } else if(scrollTopPosition < 200) {
            setFlagPosition(true);
        } else if(burger === true) {
            setFlagPosition(true);
        } else {
            setFlagPosition(false);
        }
        setOldScrollPosition(scrollTopPosition)
    }
    
    const classHeader = flagPosition ? "header" : "header header_hidden";

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
            className={classHeader}
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