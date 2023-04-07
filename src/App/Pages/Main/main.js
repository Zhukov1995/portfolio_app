import SectionAbout from './Sections/SectionAbout/sectionAbout';
import SectionContacts from './Sections/SectionContacts/sectionContacts';
import SectionTitle from './Sections/SectionTitle/sectionTitle';
import SectionWork from './Sections/SectionWork/sectionWork';
import SectionPortfolio from './Sections/SectionPortfolio/sectionPortfolio';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import './main.scss';

const Main = () => {
    let scrollPosition = useSelector(state => state.topPosition);

    // при возвращении со страницы портфолио на главную проверяем в каком месте мы были, чтобы не скролить страницу заново
    useEffect(() => {        
        window.scrollTo(0, scrollPosition);
    }, [])

    return (
        <div className='main'>
            <SectionTitle/>
            <SectionAbout/>
            <SectionWork/>
            <SectionPortfolio/>
            <SectionContacts/>
        </div>
    )
}
 export default Main;