import axios from 'axios'

const url = 'https://api.covid19api.com'

export const fetchDailyTotals = async (country) => {
    try {
        const {data} = await axios.get(`${url}/total/country/${country}`)

        const modifiedData = data.map(dailyData => ({
            date: dailyData.Date, 
            confirmed: dailyData.Confirmed,
            recovered: dailyData.Recovered,
            deaths: dailyData.Deaths
        }))

        return modifiedData
    } catch (error) {
        return error
    }
}

export const fetchCountries = async () => {
    try {
      const { data } = await axios.get(`${url}/countries`);
      
      // sort by country name
      return data.sort((a, b) => a.Country.localeCompare(b.Country));
    } catch (error) {
      return error;
    }
};