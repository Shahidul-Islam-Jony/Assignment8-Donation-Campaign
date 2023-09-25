import PropTypes from 'prop-types';

const CategoryCards = ({content}) => {
    console.log(content);
    const {image,title,category,category_bg,card_bg,text_color} = content;

    return (
        <div>
            
        </div>
    );
};

CategoryCards.propTypes = {
    content: PropTypes.object
}

export default CategoryCards;