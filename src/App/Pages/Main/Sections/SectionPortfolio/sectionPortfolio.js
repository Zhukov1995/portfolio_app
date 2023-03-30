import Service from '../../../../Service/Service';
import Title from '../../../../UI/Title/title';
import { MPortfolioCard } from '../../../../UI/PortfolioCard/portfolio-card';
import { motion } from 'framer-motion';
import './sectionPortfolio.scss';
import './sectionPortfolio.media.scss';

const SectionPortfolio = () => {

    const portfolioAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.35}
        })
    }

    const serviceProject = new Service();
    const arrProjects = serviceProject.getProjects();

    const viewArrProjects = arrProjects.map((item,index) => {
        return <MPortfolioCard
                     key={index} 
                     item={item} 
                     className="portfolio_item"
                     variants={portfolioAnimation}
                     custom={index + 1}


                />
    })

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            id='section_portfolio'
        >
            <Title number='03.' title='Собственные проекты'/>
            <div className='grid_portfolio'>
                {viewArrProjects}
            </div>
        </motion.section>
    )
}

export default SectionPortfolio;