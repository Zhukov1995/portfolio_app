import { useEffect, useState } from 'react';
import ArrowTop from './arrowTop.svg';
import './buttonScrollTop.scss';

const ButtonScrollTop = () => {
    const [showButton, setShowButton] = useState(false);

    // если высота больше 700, то компонент будет появляться
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 700) {
              setShowButton(true);
            } else {
              setShowButton(false);
            }
          });
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }

    return (
        <>
            {showButton ? 
            <button onClick={() => scrollToTop()} className='back_top'>
                <img src={ArrowTop} alt="back top image"/>
            </button>
            :
            null
            }
        </>
    )
}  

export default ButtonScrollTop;