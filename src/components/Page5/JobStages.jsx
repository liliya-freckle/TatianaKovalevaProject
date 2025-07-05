import React from 'react';
import styles from './jobstages.module.scss';
import JobStagesItem from './JobStagesItem';

const JobStages = () => {
  return (
    <div id="jobstages">
        <h2 className={styles.title}>Этапы работы</h2>
        <div className={styles.stages}> 
                <JobStagesItem number="1 этап" description="Вы оставляете заявку" /> 
                <JobStagesItem number="2 этап" description="Мы созваниваемся или связываемся другим удобным для Вас способом для консультации" />
                <JobStagesItem number="3 этап" description="Я составляю для Вас поэтапный план действий и расчет стоимости услуг" />
                <JobStagesItem number="4 этап" description="Вы утверждаете расчет и вносите предоплату 50% от полной стоимости" /> 
                <JobStagesItem number="5 этап" description="После завершения работы вы вносите остаток оплаты, и я передаю Вам все доступы и материалы" /> 
                <JobStagesItem number="6 этап" description="Я приступаю к работе в течение 1-5 дней после предоставления Вами всех необходимых материалов" /> 
            </div>
                    

    </div>

  )
}

export default JobStages