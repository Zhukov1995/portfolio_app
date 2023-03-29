import { useEffect } from 'react';
import Service from '../../Service/Service';
import PortfolioCard from '../../UI/PortfolioCard/portfolio-card';
import LinkedIn from './images/linkedIn.svg';
import Instagram from './images/instagram.svg';
import GitHub from './images/gitHub.svg';
import Title from '../../UI/Title/title';
import MyPhoto from './images/my-photo.jpg'
import './main.scss';

const Main = () => {
    const serviceProject = new Service();
    const arrProjects = serviceProject.getProjects();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    const viewArrProjects = arrProjects.map((item,index) => {
        return <PortfolioCard key={index} item={item} className="portfolio_item"/>
    })

    return (
        <>
            <section id='section_title'>
                <span className='main_color'>Привет, меня зовут</span>
                <h1>Роман Жуков.</h1>
                <h2>Я Фронтенд-разработчик.</h2>
                <p className='text_md'>Я разработчик, специализирующийся на создании веб-интерфейсов. В настоящее время сосредоточен на создании доступных, ориентированных на человека продуктов.</p>
            </section>
            <section id='section_about'>
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
            </section>
            <section id='section_work'>
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
            </section>
            <section id='section_portfolio'>
                <Title number='03.' title='Собственные проекты'/>
                <div className='grid_portfolio'>
                    {viewArrProjects}
                </div>
            </section>
            <section id='section_contacts'>
                <div className='contacts_title'>
                    <span>04.</span>
                    <h2>Контакты</h2>
                </div>
                {/* <div className='contacts_images'>
                    <a href="#" target='_blank'><img src={Instagram}/></a>
                    <a href="#" target='_blank'><img src={LinkedIn}/></a>
                    <a href="#" target='_blank'><img src={GitHub}/></a>
                </div> */}
                <a href="#">Почта: zhukov.web1995@gmail.com</a>
                <a href="#">Телеграм: zhukov1995</a>
                <a href="#">Телефон: 89776499526</a>
            </section>
        </>
    )
}
 export default Main;