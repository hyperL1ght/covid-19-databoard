# covid-19-databoard

This repo is a personal project inspired by an [Our World Data (OWD) Visualization](https://ourworldindata.org/grapher/covid-confirmed-cases-since-100th-case). I want to replicate the graph to display a different [data source](https://github.com/CSSEGISandData/COVID-19). At the moment, a static replicate of the OWD graph (core components only) has been created (please see `notebooks` for details). I'm working on building a web app for the fully-functing interactive graph (select countries, change trajectory lines).  

OWD built a graphing engine called [owid-grapher](https://github.com/owid/owid-grapher) which uses React.js and Node.js under the hood. What I'm aiming for is less complex. At the moment, I'm thinking of using Vue.js, Express.js, Node.js and MongoDB.

## Update: Please switch to branch `react-db` of this repo for detail on the dashboard I built using React.js. Building a server + database for this task is overkill, consuming existing COVID-19 API is more practical.  
