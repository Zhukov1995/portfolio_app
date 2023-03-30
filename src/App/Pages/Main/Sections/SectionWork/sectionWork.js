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
            transition: { delay: custom * 0.2}
        })
    }


    return (
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={WorkAnimation}
            custom={3}
            id='section_work'
        >
            <Title number='02.' title='Опыт работы'/>
            <div className='work_item'>
                <h3>Индивидуальное предпринимательство / фриланс биржа</h3>
                <span>Сентябрь 2022 - Февраль 2023</span>
                <p>Разрабатывал сайты, новые фитчи или исправлял баги для заказчиков. Работал в основном на своем стеке. Под некоторые заказы нужно было изучать новые технологии.
                Так же писал скрипты под Tilda, Wordpress, Webflow.</p>
            </div>
            <div className='work_item'>
                <h3>Иной опыт</h3>
                <p>Последние 5 лет работал в ресторанной сфере.В основном на позиции бармена.Работал за контактной стойкой,переодиечски заменял менеджеров,занимался закупками.</p>
            </div>
        </motion.section>
    )
}

export default SectionWork;