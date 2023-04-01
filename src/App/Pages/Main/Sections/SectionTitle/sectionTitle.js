import { motion } from "framer-motion"
import './sectionTitle.scss';
import './sectionTitle.media.scss';

const SectionTitle = () => {

    const textAnimation = {
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
    
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            id='section_title'
        >
            <motion.span variants={textAnimation} custom={2} className='main_color'>Привет, меня зовут</motion.span>
            <motion.h1 variants={textAnimation} custom={3}>Роман Жуков.</motion.h1>
            <motion.h2 variants={textAnimation} custom={4}>Я Фронтенд-разработчик.</motion.h2>
            <motion.p variants={textAnimation} custom={5} className='text_md'>Я разработчик, специализирующийся на создании веб-интерфейсов. В настоящее время сосредоточен на создании доступных, ориентированных на человека продуктов.</motion.p>
        </motion.section>
    )
}

export default SectionTitle;