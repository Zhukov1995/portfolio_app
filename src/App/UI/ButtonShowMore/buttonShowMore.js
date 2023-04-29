import React from 'react';
import './buttonShowMore.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setOffsetPortfolio } from '../../Store/actions';

const ButtonShowMore = () => {
    const offsetPortfolio = useSelector(state => state.offsetPortfolio);
    const dispatch = useDispatch();

    // меняем значение и опираясь на это меняем class в секции Портфолио
    const toggleText = () => {
        if(offsetPortfolio !== 'Больше') {
            dispatch(setOffsetPortfolio('Больше'))
        } else {
            dispatch(setOffsetPortfolio('Скрыть'))
        }
    }

    return (
        <button onClick={() => toggleText()} className='show_more'>
            {offsetPortfolio}
        </button>
    )
}

export default ButtonShowMore;