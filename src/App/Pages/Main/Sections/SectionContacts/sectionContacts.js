import { motion } from 'framer-motion';
import Instagram from './images/instagram.svg';
import GitHub from './images/gitHub.svg';
import LinkedIn from './images/linkedIn.svg';
import Telegram from './images/telegram.svg';
import './sectionContacts.scss';
import './sectionContacts.media.scss';
import ButtonLink from '../../../../UI/ButtonLink/buttonLink';

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
            custom={1}
            id='section_contacts'
        >
            <div className='contacts_title'>
                <span>04.</span>
                <h2>Контакты</h2>
            </div>
            <div className='contacts_buttons'>
                <ButtonLink
                    href="mailto:zhukov.web1995@gmail.com"
                    text="Написать"
                    size='md'
                />
                <ButtonLink
                    href="tel:89776499526"
                    text="Позвонить"
                    size='md'
                />
            </div>
            <div className='contacts_social'>
                <a href='https://github.com/Zhukov1995' target='_blank'>
                    <img src={GitHub} alt={`${GitHub} image`}/>
                </a>
                <a href='' target='_blank'>
                    <img src={LinkedIn} alt={`${LinkedIn} image`}/>
                </a>
                <a href='https://instagram.com/romanzhukov1995?igshid=YmMyMTA2M2Y=' target='_blank'>
                    <img src={Instagram} alt={`${Instagram} image`}/>
                </a>
                <a href='https://telegram.im/@zhukov1995'>
                    <img src={Telegram} alt={`${Telegram} image`}/>
                </a>
            </div>
        </motion.section>
    )
}

export default SectionContacts;