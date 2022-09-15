import css from 'components/DataCollection/DataCollection.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div>
            <button className={css.btn} onClick={() => onLeaveFeedback('good')}>Good</button>
        <button className={css.btn} onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
            <button className={css.btn} onClick={() => onLeaveFeedback('bad')}>Bad</button>
        </div>
    )
}

FeedbackOptions.propTypes = {

    onLeaveFeedback: PropTypes.objectOf(PropTypes.element.isRequired),
    
}