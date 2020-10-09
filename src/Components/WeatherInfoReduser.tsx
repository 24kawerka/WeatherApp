import { createStore } from 'redux';
import { InitialStateType, WeatherActionType } from './Typescript/WeatherInfoReduserType';

export const WEATHER_CREATE = ' WEATHER_CREATE';
export const DAYS_5 = ' DAYS_5';

export const InitialState: InitialStateType = {
	temp: null,
	name: null,
	temp_max: null,
	temp_min: null,
	main: null,
	icon: null,
	feels_like: null,
	humidity: null,
	speed: null,
	list: [],
	description: null,
	dt: null
};

export const WeatherInfoReduser = (state = InitialState, action: WeatherActionType): InitialStateType => {
	switch (action.type) {
		case WEATHER_CREATE: {
			return {
				...state,
				temp: action.payload.data.main.temp,
				name: action.payload.data.name,
				temp_max: action.payload.data.main.temp_max,
				temp_min: action.payload.data.main.temp_min,
				main: action.payload.data.weather[0].main,
				feels_like: action.payload.data.main.feels_like,
				humidity: action.payload.data.main.humidity,
				speed: action.payload.data.wind.speed,
				description: action.payload.data.weather[0].description,
				dt: action.payload.data.dt
			};
		}
		case DAYS_5: {
			return {
				...state,
				list: action.payload2.data.list
			};
		}

		default:
			return state;
	}
};

export let store = createStore(WeatherInfoReduser);
