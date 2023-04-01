import './main.scss';
import SectionAbout from './Sections/SectionAbout/sectionAbout';
import SectionContacts from './Sections/SectionContacts/sectionContacts';
import SectionTitle from './Sections/SectionTitle/sectionTitle';
import SectionWork from './Sections/SectionWork/sectionWork';
import SectionPortfolio from './Sections/SectionPortfolio/sectionPortfolio';

const Main = () => {

    return (
        <div>
            <SectionTitle/>
            <SectionAbout/>
            <SectionWork/>
            <SectionPortfolio/>
            <SectionContacts/>
        </div>
    )
}
 export default Main;