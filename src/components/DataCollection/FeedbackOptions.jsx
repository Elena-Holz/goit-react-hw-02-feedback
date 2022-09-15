import css from 'components/DataCollection/DataCollection.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div>
            <button className={css.btn} onClick={() => onLeaveFeedback('good')}>Good</button>
            <button className={css.btn} onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
            <button className={css.btn} onClick={() => onLeaveFeedback('bad')}>Bad</button>
        </div>
    )
}

