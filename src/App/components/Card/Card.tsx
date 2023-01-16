type CardProps = {
    /** URL изображения */
    image: string;
    /** Заголовок карточки */
    title: React.ReactNode;
    /** Подзаголовок карточки */
    subtitle: React.ReactNode;
    /** Содержимое карточки (футер/боковая часть), может быть пустым */
    content?: React.ReactNode;
    /** Клик на карточку */
    onClick?: React.MouseEventHandler;
};

export const Card: React.FC<CardProps> = ({ image, title, subtitle, content, onClick }) => {
    return (
        <div onClick={onClick}>
            <img src={image} />
            <div>{title}</div>
            <div>{subtitle}</div>
            {content !== null && content}
        </div>
    );
};

export default Card;