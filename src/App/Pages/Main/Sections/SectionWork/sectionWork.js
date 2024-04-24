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
                <h3>Индивидуальное предпринимательство / фриланс биржа</h3>
                <span>Сентябрь 2021 - Июнь 2022</span>
                <p>Разрабатывал сайты, новые фитчи, а также исправлял баги для заказчиков. Работал в основном на своем стеке. Под некоторые заказы нужно было изучать новые технологии.
                    Так же писал скрипты под Tilda, Wordpress, Webflow.</p>
            </div>
            <div className='work_item'>
                <h3>Фронтенд разработчик в компании Techpeople</h3>
                <span>Август 2022 - по настоящее время</span>
                <p>Разрабатываю кастомные дашборды, виджеты, графики, таблицы для BI клиентов на базе платформы Visiology, и пишу полноценные приложения на React.</p>
            </div>
        </motion.section>
    )
}

export default SectionWork;