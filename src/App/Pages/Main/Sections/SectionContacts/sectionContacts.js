import { motion } from 'framer-motion';
import './sectionContacts.scss';
import './sectionContacts.media.scss';

const SectionContacts = () => {

    const ContactsAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2}
        })
    }

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={ContactsAnimation}
            custom={3}
            id='section_contacts'
        >
            <div className='contacts_title'>
                <span>04.</span>
                <h2>Контакты</h2>
            </div>
            <a href="#">Почта: zhukov.web1995@gmail.com</a>
            <a href="#">Телеграм: zhukov1995</a>
            <a href="#">Телефон: 89776499526</a>
        </motion.section>
    )
}

export default SectionContacts;