import Logo from '../../Header/logo.svg';
import './loading.scss';

const Loading = () => {
    return (
        <div className='wrapper_loading'>
            <img src={Logo}  className="loading" alt="loading"/>
        </div>
    )
}

export default Loading;