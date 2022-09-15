import css from 'components/DataCollection/DataCollection.module.css';


 const Section = ({ title, children }) => {
    return (
        <div>
            <h3 className={css.title}>{title}</h3>
            {children}
        </div>
    )
}

export default Section;      