import { useSelector } from 'react-redux';
import { Link as LinkScroll } from 'react-scroll';
import './navigation.scss';

const Navigation = () => {
    const flagBtn = useSelector(state => state.flagBtn);
    const burger = useSelector(state => state.burger);

    const isVisible = flagBtn ? 'display_none' : null; 

    const classNav = burger ? 'nav nav_open' : 'nav';

    return (
        <div className={classNav}>
            <div className='nav_wrapper_link'>
                <span className={isVisible}>
                    01.
                    <LinkScroll
                        activeClass='active'
                        to='section_about'
                        spy={true}
                        smooth={true}
                        offset={-170}
                        duration={600}
                    >Обо мне</LinkScroll>
                </span>
            </div>
            <div className='nav_wrapper_link'>
                <span className={isVisible}>
                    02.
                    <LinkScroll
                        activeClass='active'
                        to='section_work'
                        spy={true}
                        smooth={true}
                        offset={-250}
                        duration={600}
                    >Опыт</LinkScroll>
                </span>
            </div>
            <div className='nav_wrapper_link'>
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
            </div>
            <div className='nav_wrapper_link'>
                <span className={isVisible}>
                    04.
                    <LinkScroll
                        activeClass='active'
                        to='section_contacts'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={600}
                    >Контакты</LinkScroll>
                </span>
            </div>
            <div className='nav_wrapper_link'>
                <a href='https://disk.yandex.ru/i/YJnNzVoxZHVB_A' target='_blank'   className='nav_link__pdf'>Резюме</a>
            </div>
        </div>
    )
}

export default Navigation;