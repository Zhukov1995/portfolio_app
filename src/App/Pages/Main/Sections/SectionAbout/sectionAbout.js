import MyPhoto from './photo_my.jpg';
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
                    <p className='text_md'>Привет! Меня зовут Роман Жуков и мне нравится создавать вещи для веба. Я опытный front-end разработчик с более чем двухлетним опытом работы. Мои основные навыки включают в себя разработку интерфейсов, адаптивную и кроссбраузерную верстку, а также тестирование интерфейсов. Я стремлюсь к постоянному профессиональному росту, люблю изучать новые технологии и применять их на практике. Креативен, внимателен к деталям и способен эффективно работать в команде. Готов решать сложные задачи и достигать поставленных целей.</p>
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
                    <li>CSS 10/10</li>
                    <li>HTML 10/10</li>
                    <li>SASS/LESS 8/10</li>
                    <li>Bootstrap 7/10</li>
                    <li>JavaScript 9/10</li>
                    <li>TypeScript 7/10</li>
                    <li>React 9/10</li>
                    <li>Redux 9/10</li>
                    <li>GraphQL 3/10</li>
                    <li>NextJS 6/10</li>
                    <li>React Native 3/10</li>
                    <li>Expo 3/10</li>
                    <li>GIT 8/10</li>
                    <li>Webpack 5/10</li>
                    <li>REST API 8/10</li>
                    <li>Photoshop 5/10</li>
                    <li>Figma 5/10</li>
                </ul>
            </div>
        </motion.section>
    )
};

export default SectionAbout;