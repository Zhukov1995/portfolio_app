import './main.scss';
import SectionAbout from './Sections/SectionAbout/sectionAbout';
import SectionContacts from './Sections/SectionContacts/sectionContacts';
import SectionTitle from './Sections/SectionTitle/sectionTitle';
import SectionWork from './Sections/SectionWork/sectionWork';
import SectionPortfolio from './Sections/SectionPortfolio/sectionPortfolio';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Main = () => {
    let scrollPosition = useSelector(state => state.topPosition);

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