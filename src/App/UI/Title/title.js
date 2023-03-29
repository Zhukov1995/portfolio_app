import './title.scss';

const Title = ({number, title}) => {
    return (
        <div className='title'>
            <span>{number}</span>
            <h2>{title}</h2>
        </div>
    )
}

export default Title;