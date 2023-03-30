import './main.scss';
import SectionAbout from './Sections/SectionAbout/sectionAbout';
import SectionContacts from './Sections/SectionContacts/sectionContacts';
import SectionTitle from './Sections/SectionTitle/sectionTitle';
import SectionWork from './Sections/SectionWork/sectionWork';
import SectionPortfolio from './Sections/SectionPortfolio/sectionPortfolio';
import { motion } from 'framer-motion';

const Main = () => {

    return (
        <>
            <SectionTitle/>
            <SectionAbout/>
            <SectionWork/>
            <SectionPortfolio/>
            <SectionContacts/>
        </>
    )
}
 export default Main;