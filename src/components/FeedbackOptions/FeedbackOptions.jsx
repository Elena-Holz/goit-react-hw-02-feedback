import css from 'components/FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    
    return ( 
            <>
            <button className={css.btn} onClick={() => onLeaveFeedback('good')}>Good</button>
            <button className={css.btn} onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
            <button className={css.btn} onClick={() => onLeaveFeedback('bad')}>Bad</button> 
            </>
    )
}

FeedbackOptions.propTypes = {

    onLeaveFeedback: PropTypes.func.isRequired,
    
}
git
    