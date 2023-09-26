import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const DonationCards = ({ content }) => {
    const { image, category, title, price, category_bg, card_bg, text_color } = content;

    const cardStyle = {
        backgroundColor: card_bg,
        height:'220px'
    }
    const textColor = {
        color: text_color,
    }
    const btn ={
        backgroundColor:text_color,
        padding:'9px 16px',
        borderRadius:'4px',
        color:'white',
        fontSize:'18px',
        fontWeight:'600',
    }
    const categoryStyle = {
        backgroundColor: category_bg,
        color: text_color,
        borderRadius: '4px',
        padding: '4px 10px',
        width: 'fit-content'
    }


    return (
        <div>
            <div style={cardStyle} className="card flex-col md:flex-row lg:flex-row card-side">
                <figure><img src={image.link3} className='w-60 h-56' alt={title} /></figure>
                <div className="card-body p-6">
                    <h3 style={categoryStyle}>{category}</h3>
                    <h2 className='text-2xl font-bold'>{title}</h2>
                    <p style={textColor} className='text-base font-bold mt-2 mb-4'>{price}</p>
                    <div className="card-actions justify-start">
                       <Link to={`/donationDetails/${title}`} style={btn}>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

DonationCards.propTypes = {
    content: PropTypes.object
}

export default DonationCards;