import React from 'react'
import { Buttons, Cards, CountryPicker, Chart, CornerRibbon} from './components'
import styles from './App.module.css'
import {fetchDailyTotals } from './api'

class App extends React.Component{

    // automatically wrapped in the constructor 
    state = {
        data: [],
        country: '',
        scale: 'logarithmic'
    }

    handleCountryChange = async (country) => {
        if(country){
            const fetchedData = await fetchDailyTotals(country)
            this.setState({data: fetchedData, country: country})
        }else{
            this.setState({data: [], country: ''})
        }
    }

    handleScaleChange = async(scale) => {
        this.setState({scale: scale})
    }

    render() {

        const {data, country, scale} = this.state

        return(
            <div className={styles.container}>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Buttons handleScaleChange={this.handleScaleChange}/>
                <Cards data={data[data.length-1]} />
                <Chart data={data} country={country} scale={scale}/>
                <CornerRibbon text={`Data source`} link="https://covid19api.com/"/>
            </div>
        )
    };
}

export default App