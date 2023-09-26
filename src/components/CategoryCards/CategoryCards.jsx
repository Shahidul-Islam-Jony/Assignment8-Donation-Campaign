import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const CategoryCards = ({ content }) => {
    // console.log(content);
    const { image, title, category, category_bg, card_bg, text_color } = content;


    const cardStyle = {
        backgroundColor: card_bg,
    }
    const textStyle = {
        color: text_color,
        fontSize: '20px',
        fontWeight: '600',
    }
    const categoryStyle = {
        backgroundColor: category_bg,
        color: text_color,
        borderRadius: '4px',
        padding: '4px 10px',
        width: 'fit-content'
    }

    return (
        <div className='z-20'>
            <Link to={`/donationDetails/${title}`}>
                <div style={cardStyle} className="card rounded-lg card-compact">
                    <figure><img className='w-full h-64' src={image.link1} alt={category} /></figure>
                    <div className="card-body">
                        <h2 style={categoryStyle} className="card-title">{category}</h2>
                        <h2 style={textStyle}>{title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

CategoryCards.propTypes = {
    content: PropTypes.object
}

export default CategoryCards;