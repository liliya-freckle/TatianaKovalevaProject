import styles from './Cases.module.scss'

const CasePopup = ({ data, handleClose }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popup_content}>
        <img
          className={styles.close_img}
          src='src/assets/images/close.png'
          alt='close'
          onClick={handleClose}
        />
        <h3>Задача:</h3>
        <p>{data.text}</p>
        <p className={styles.text}>Выполнено:</p>
        <ul>
          {data.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p className={styles.text}>{data.deadline}</p>
      </div>
    </div>
  )
}

export default CasePopup
