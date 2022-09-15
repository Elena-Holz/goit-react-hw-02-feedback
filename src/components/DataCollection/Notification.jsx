import css from 'components/DataCollection/DataCollection.module.css';


const Notification = ({message}) => {
        return (
            <div className={css.listItem}>{message}</div> 
        )
}

export default Notification ;             

