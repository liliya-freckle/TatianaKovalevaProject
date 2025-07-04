import styles from './Cases.module.scss'
import Button from '../Button/Button'

const CasesBlock = ({ imgSrc, text, onButtonClick }) => {
  return (
    <div className={styles.block}>
      <img
        src={imgSrc}
        alt='кейс'
      />
      <div className={styles.block_text}>
        <h3>Задача:</h3>
        <p>{text}</p>
        <Button onClick={onButtonClick}>Посмотреть кейс</Button>
      </div>
    </div>
  )
}

export default CasesBlock
