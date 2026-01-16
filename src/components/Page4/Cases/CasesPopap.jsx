import CloseButton from '../../CloseButton/CloseButton'
import styles from './Cases.module.scss'

const CasePopup = ({ data, handleClose }) => {
    const handleWrapperClick = () => {
    handleClose()
  }
  const handleContentClick = (e) => {
    e.stopPropagation()
  }
  return (
    <div className={styles.popup} onClick={handleWrapperClick}>
      <div className={styles.popup_content}  onClick={handleContentClick}>
        <CloseButton onClick={handleClose} />
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
