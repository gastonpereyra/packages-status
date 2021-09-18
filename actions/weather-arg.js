'use strict';

const WeatherArg = require('weather-arg');
const hasFields = require('../lib/has-field')

const weatherFields = [
    'id',
    'name',
    'province',
    'lastUpdate',
    'humidity',
    'pressure',
    'st',
    'visibility',
    'windSpeed',
    'weatherId',
    'description',
    'temperature',
    'windDirection',
    'temperatureDescription'
];

const substationWeather = await WeatherArg.getWeatherById(9949);

if(hasFields(substationWeather, weatherFields))
    throw new Error('Weather-arg not Working');
    
