import { useSelector } from 'react-redux';
import { Link as LinkScroll } from 'react-scroll';
import { motion } from 'framer-motion';
import ButtonLink from '../UI/ButtonLink/buttonLink';
import './navigation.scss';
import './navigation.media.scss';

const Navigation = () => {
    const flagBtn = useSelector(state => state.flagBtn);
    const burger = useSelector(state => state.burger);

    const isVisible = flagBtn ? 'display_none' : null; 

    const classNav = burger ? 'nav nav_open' : 'nav';


    const navAnimation = {
        hidden: {
            y: -100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2}
        })
    }


    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className={classNav}
        >
            <motion.div variants={navAnimation} custom={4} className='nav_wrapper_link'>
                <span className={isVisible}>
                    01.
                    <LinkScroll
                        activeClass='active'
                        to='section_about'
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={600}
                    >Обо мне</LinkScroll>
                </span>
            </motion.div>
            <motion.div variants={navAnimation} custom={5} className='nav_wrapper_link'>
                <span className={isVisible}>
                    02.
                    <LinkScroll
                        activeClass='active'
                        to='section_work'
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={600}
                    >Опыт</LinkScroll>
                </span>
            </motion.div>
            <motion.div variants={navAnimation} custom={6} className='nav_wrapper_link'>
                <span className={isVisible}>
                    03.
                    <LinkScroll
                        activeClass='active'
                        to='section_portfolio'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={600}
                    >Портфолио</LinkScroll>
                </span>
            </motion.div>
            <motion.div variants={navAnimation} custom={7} className='nav_wrapper_link'>
                <span className={isVisible}>
                    04.
                    <LinkScroll
                        activeClass='active'
                        to='section_contacts'
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={600}
                    >Контакты</LinkScroll>
                </span>
            </motion.div>
            <motion.div variants={navAnimation} custom={9} className='nav_wrapper_link'>
                <ButtonLink
                    href='https://disk.yandex.ru/d/l3sE9P6PqN7rgA'
                    text='Резюме'
                    size='sm'
                />
            </motion.div>
        </motion.div>
    )
}

export default Navigation;