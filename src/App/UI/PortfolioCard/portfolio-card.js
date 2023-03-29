import { useDispatch } from 'react-redux';
import { setTargetProject } from '../../Store/actions';
import { Link } from 'react-router-dom';
import Folder from './folder.svg';
import './portfolio-card.scss';

const PortfolioCard = ({item}) => {

const dispatch = useDispatch();

const stackList = item.stack.map((item,index) => {
    return <li key={index}>{item}</li>
})

    return (
        <Link to="/portfolio" className='link_router'>
            <div className='portfolio_card' onClick={() => dispatch(setTargetProject(item))}>
                <img src={Folder} alt='folder-img'/>
                <h3>{item.title}</h3>
                <p className='description'>{item.shortDescription}</p>
                <ul>
                    {stackList}
                </ul>
            </div>
        </Link>
    )
}

export default PortfolioCard;