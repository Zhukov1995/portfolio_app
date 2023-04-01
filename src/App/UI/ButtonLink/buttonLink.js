import './buttonLink.scss';

const ButtonLink = ({href,text,size = 'sm'}) => {

    const classButton = size === 'sm' ? 'button_link sm' : 'button_link md';

    return (
        <a href={href} target='_blank' className={classButton}>{text}</a>
    )
}

export default ButtonLink;