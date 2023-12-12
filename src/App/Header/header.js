import Navigation from '../Navigation/navigation';
import { useRef, useState } from 'react';
import { MBurger } from '../UI/Burger/burger';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTopPosition } from '../Store/actions';
import Logo from './logo.svg';
import './header.scss';
import './header.media.scss';

const Header = () => {
    const burger = useSelector(state => state.burger);
    const [oldScrollPosition,setOldScrollPosition] = useState(0);
    const [flagPosition,setFlagPosition] = useState(true);
    const dispatch = useDispatch();
    const imgRef = useRef(null);
  
    // отслеживаем событие скрола,чтобы скрывать header, когда он не нужен
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
        setTimeout(() => {imgRef.current.style.transform=`rotate(${scrollTopPosition / 2}deg)`},0)
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
                <motion.img 
                    src={Logo} 
                    variants={headerAnimation} 
                    custom={2} 
                    onClick={() => dispatch(setTopPosition(0))}
                    ref={imgRef}
                />
            </Link>
            <MBurger variants={headerAnimation} custom={2}/>
            <Navigation/>   
        </motion.header>
    )
}

export default Header;