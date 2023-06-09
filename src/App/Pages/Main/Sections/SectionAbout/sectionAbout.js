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
            transition: { delay: custom * 0.2 }
        })
    }

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={AboutAnimation}
            custom={1}
            id='section_about'
        >
            <Title number='01.' title='Обо мне' />
            <div className='flex_about'>
                <div className='about'>
                    <p className='text_md'>Привет! Меня зовут Роман Жуков и мне нравится создавать вещи для веба. Мой интерес к веб-разработке появился в 2020 году, когда я поступил в учебное заведение, по специальности "Информационные системы и программирование". Тогда я еще не был так сильно в это втянут, так как на первом курсе были только общеобразовательные предметы. Спустя год я понял, что в этом направление нужно именно саморазвиваться и обладать самодисциплиной, потому что технологии очень быстро развиваются. Я отошел немного от основной учебы, и начал читать статьи, книги, пробовать писать код. И такими темпами потихоньку развивался, при это параллельно работая. На сегодняшний день я уже обладаю достаточными знаниями, для работы с реальными продуктами.</p>
                </div>
                <div className='wrapper_img'>
                    <img src={MyPhoto} alt='my-photo' className='about_img' />
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
                    <li>SASS/LESS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>React Native</li>
                    <li>Expo </li>
                    <li>GIT</li>
                    <li>Eslint</li>
                    <li>Photoshop</li>
                    <li>Figma</li>
                </ul>
            </div>
        </motion.section>
    )
};

export default SectionAbout;