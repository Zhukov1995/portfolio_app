import MyPhoto from './my-photo.jpg';
import Title from '../../../../UI/Title/title';
import { motion } from 'framer-motion';
import './sectionAbout.scss';
import './sectionAbout.media.scss';

const SectionAbout = () => {

    const AboutAnimation = {
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
            variants={AboutAnimation}
            custom={1}
            id='section_about'
        >
            <Title number='01.' title='Обо мне'/>
            <div className='flex_about'>
                <div className='about'>
                    <p className='text_md'>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                    <p className='text_md'>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest    in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking     together a custom reblog button taught me a lot about HTML & CSS!</p>
                </div>
                <div className='wrapper_img'>
                    <img src={MyPhoto} alt='my-photo' className='about_img'/>
                </div>
            </div>
            <div className='about_learning'>
            <h2>Пройденные курсы:</h2>
                <ul>
                    <li>Responsive Web Design - freeCodeCamp</li>
                    <li>JavaScript Algorithms and Data Structures - freeCodeCamp</li>
                    <li>Полный курс React + Redux - Иван Петриченко</li>
                    <li>Frontend-разработчик - SkillBox</li>
                </ul>
            </div>
            <div className='about_skills'>
                <h2>Мой технологический стек:</h2>
                <ul>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>JavaScript/ES6</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Formik</li>
                    <li>GIT</li>
                    <li>Eslint</li>
                    <li>SASS/LESS</li>
                </ul>
            </div>
        </motion.section>
    )
};

export default SectionAbout;