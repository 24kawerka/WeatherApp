import React, { useState } from 'react';
import axios from 'axios';
import { useReducer } from 'react';
import { InitialState, WEATHER_CREATE, WeatherInfoReduser, DAYS_5 } from './WeatherInfoReduser';
import s from './Search.module.css';
import { InfoWeath } from './InfoWeath/InfoWeath';
import Table from './Table/Table';

export const API_KEY = '3dc8367615f5c307219e32825787a689';

export const Search: React.FC = () => {
	const [ state, dispatch ] = useReducer(WeatherInfoReduser, InitialState);
	const [ cityName, setValue ] = useState({ city: '' });

	const fetch = async (e: React.FormEvent) => {
		e.preventDefault();
		Promise.all([
			axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.city}&appid=${API_KEY}&lang=ru&units=metric

    `),
			axios.get(
				`https://api.openweathermap.org/data/2.5/forecast?q=${cityName.city}&appid=${API_KEY}&lang=ru&units=metric`
			),
			,
		])
			.then(([ response, response2 ]) => {
				dispatch({
					type: WEATHER_CREATE,
					payload: response
				});
				dispatch({
					type: DAYS_5,
					payload2: response2
				});
			})
			.catch((error) => alert('Такого города нет'));
		setValue({ city: ' ' });
	};

	let nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue({ city: e.target.value });
	};

	return (
		<div className={s.wrapper}>
			<div className={s.container}>
				<div className={s.titleText}>Узнайте погоду в вашем городе!</div>
				<div className={s.search}>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
					/>
					<form onSubmit={fetch} className={s.example}>
						<input type="text" placeholder="City" value={cityName.city} onChange={nameChange} />
						<button type="submit">
							<i className="fa fa-search" />
						</button>
					</form>
				</div>
				<InfoWeath
					state={{
						main: {
							temp: state.temp,
							temp_max: state.temp_max,
							temp_min: state.temp_min,
							feels_like: state.feels_like,
							humidity: state.humidity
						},
						dt: state.dt,
						name: state.name,
						weather: [ { description: state.description, main: state.main } ],
						wind: { speed: state.speed }
					}}
				/>
				<Table state={state.list} />
			</div>
		</div>
	);
};
