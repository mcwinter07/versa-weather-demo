import React from 'react'
import { useQuery } from "react-query";
import dayjs from 'dayjs'

// Styles
import styles from './forecast-list.module.css'


//Helpers
import { fetchWeather } from '../helpers/fetch-weather'

//Components
import Forecast from './forecast'

export const ForecastList = ({
  cssEnabled,
  city,
  countryCode,
}) => {
  const {isLoading, data, isError} = useQuery([city, countryCode], fetchWeather, {
    retry: 1,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  })

  const filterDates = (date, prevDate) => {
    let day = dayjs(date).format('D'),
        prevDay = dayjs(prevDate).format('D');
  
    if (day !== prevDay) {
      return true;
    }
  }

  return <section className="forecast-week">
      <h1>{city} Forecast</h1>
      <ul className={cssEnabled && styles.list_active}>
        {!isLoading ?
          <>
            {isError ? 
                <p>well bugger... something went wrong!</p>
              :
                <>
                  {data.list && data.list.map((forecast, index, array) => {
                    return index > 0 && filterDates(forecast.dt_txt, array[index - 1].dt_txt) ?
                      <Forecast
                        key={index}
                        cssEnabled={cssEnabled}
                        city={city}
                        min={forecast.main.temp_min}
                        max={forecast.main.temp_max}
                        weatherStatus={forecast.weather[0].description}
                        weatherIcon={forecast.weather[0].icon}
                        date={dayjs(forecast.dt_txt).format('ddd')}
                      />
                    : null
                })}
                </>
            }
          </>
        : 
          <p>loading yo</p>
        }
      </ul>
    </section> 
}

export default ForecastList
