import React from 'react'
import styles from './forecast.module.css'

export const Forecast = ({
  city,
  min,
  max,
  weatherStatus,
  weatherIcon,
  date,
  cssEnabled
  }) => {
    return <li className={cssEnabled && styles.forecast_active}>
      <div className={cssEnabled && styles.forecast_wrapper_active}>
        <h2 style={{marginTop: '20px'}}>{date}</h2>
        <img
          className="image"
          src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt={`today there will be ${weatherStatus}`}
          width="45"
          height="42"
        />
        <ul>
          <li>
            <p>{min}&#730;</p>
          </li>
          <li>
            <p>{max}&#730;</p>
          </li>
        </ul>
      </div>
    </li>
    }


export default Forecast