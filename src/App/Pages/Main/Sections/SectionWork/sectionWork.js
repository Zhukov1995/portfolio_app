import Title from '../../../../UI/Title/title';
import { motion } from 'framer-motion';
import './sectionWork.scss';
import './sectionWork.media.scss';

const SectionWork = () => {

    const WorkAnimation = {
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
            variants={WorkAnimation}
            custom={1}
            id='section_work'
        >
            <Title number='02.' title='Опыт работы' />
            <div className='work_item'>
                <h3>Frontend-разработчик в компании Techpeople</h3>
                <span>Март 2022 - по настоящее время</span>
                <h4 className='first_title'>Цели компании:</h4>
                <p>Разработка и поддержка аналитических сервисов для крупных компаний</p>
                <h4>Обязанности:</h4>
                <ul>
                    <li>Разработка сервисов, виджетов и функционала для BI платформы Visiology используя JavaScript</li>
                    <li>Разработка сервисов, виджетов и функционала для BI платформы Apache Superset используя React</li>
                </ul>
                <h4>Достижения:</h4>
                <ul>
                    <li>Разработал self-service для комплексной и удобной работы с дашбордами для платформы
                        Visiology. Компания Visiology долгое время ставила нашу разработку в пример и писала статьи
                        на эту тему. В итоге эта реклама привела нам 2-х новых клиентов.</li>
                    <li>Разработал на JavaScript Мульти Экранный Контроллер, который позволяет управлять
                        контентом на всех подключенных экранах. Внедрили эту технологию в аналитический сервис,
                        а аналитический сервис в МЧС. Получился сервис для управления оперативными дашбордами
                        на всех экранах. Тем самым увеличил стоимость проекта на 35%</li>
                    <li>Разобрался в архитектуре крупного open-source проекта Apache Superset написанном на
                        React, научился кастомизировать интерфейс так, чтобы ничего не ломалось. Так же в процессе
                        научился пользоваться Docker, Linux(Ubuntu).</li>
                </ul>
            </div>
            <div className='work_item'>
                <h3>Индивидуальное предпринимательство / фриланс биржа</h3>
                <span>Февраль 2021 - Март 2022</span>
                <h4 className='first_title'>Цели компании:</h4>
                <p>Разработка приложений, сайтов и фитч для частных клиентов</p>
            </div>
        </motion.section>
    )
}

export default SectionWork;