import Logo from '../../Header/logo.svg';
import './loading.scss';

const Loading = () => {
    return (
        <img src={Logo}  className="loading" alt="loading"/>
    )
}

export default Loading;