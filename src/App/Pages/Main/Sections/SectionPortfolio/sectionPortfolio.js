import Service from '../../../../Service/Service';
import Title from '../../../../UI/Title/title';
import { MPortfolioCard } from '../../../../UI/PortfolioCard/portfolio-card';
import { motion } from 'framer-motion';
import './sectionPortfolio.scss';
import './sectionPortfolio.media.scss';
import { useSelector } from 'react-redux';
import ButtonShowMore from '../../../../UI/ButtonShowMore/buttonShowMore';

const SectionPortfolio = () => {
    const serviceProject = new Service();
    const arrProjects = serviceProject.getProjects();
    const offsetPortfolio = useSelector(state => state.offsetPortfolio);

    const portfolioAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.25 }
        })
    }

    const viewArrProjects = arrProjects.map((item, index) => {
        return <MPortfolioCard
            key={index}
            item={item}
            className="portfolio_item"
            variants={portfolioAnimation}
            custom={index + 1}
        />
    })

    const isActive = offsetPortfolio === 'Скрыть' ? 'active_show_more' : '';

    return (
        <>
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            id='section_portfolio'
            className={isActive}
        >
            <Title number='03.' title='Собственные проекты' />
            <div className='grid_portfolio'>
                {viewArrProjects}
            </div>
        </motion.section>
        <ButtonShowMore/>
        </>
    )
}

export default SectionPortfolio;