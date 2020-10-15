import axios from 'axios'

export const fetchWeather = async (cityName, countryCode) => {
  try {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName||"melbourne"},${countryCode||"au"}&units=metric&appid=${process.env.GATSBY_WEATHER_KEY}`, {
      method: 'get',
      timeout: 3000,
      responseType: 'json'
    })
    const { data } = await res
    console.log(res)
    console.log(data)
    return data
  } catch (error) {
    throw error
  } 
}