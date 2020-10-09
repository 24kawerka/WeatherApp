import React from 'react';
import { Clouds } from '../Icons/Clouds';
import { Rain } from '../Icons/Rain';
import { Clear } from '../Icons/Clear';
import { Snow } from '../Icons/Snow';
import { Thunderstorm } from '../Icons/Thunderstorm';
import s from './InfoWeath.module.css';
import { PropsInfo } from './../Typescript/WeatherInfoReduserType';
import { month } from '../Month/Month';

export const InfoWeath = (props: PropsInfo) => {
	let date = new Date(props.state.dt! * 1000);

	return (
		<div className={s.first}>
			{props.state.main.temp && (
				<div className={s.infoWeath}>
					<span className={s.temp}>{Math.round(props.state.main.temp)}°</span>
					<span>
						{date.getDate()} {month} {date.getFullYear()}
					</span>
					<div>Город: {props.state.name}</div>
					<div>{props.state.weather[0].main === 'Clouds' && <Clouds />}</div>
					<div>{props.state.weather[0].main === 'Rain' && <Rain />}</div>
					<div>{props.state.weather[0].main === 'Clear' && <Clear />}</div>
					<div>{props.state.weather[0].main === 'Mist' && <Clouds />}</div>
					<div>{props.state.weather[0].main === 'Snow' && <Snow />}</div>
					<div>{props.state.weather[0].main === 'Thunderstorm' && <Thunderstorm />}</div>
					<div>{props.state.weather[0].main === 'Fog' && <Clouds />}</div>
					<span>{props.state.weather[0].description}</span>
					<details className={s.details}>
						<summary>Детально</summary>
						<div>
							{Math.round(props.state.main.temp_min!)} °/
							{Math.round(props.state.main.temp_max!)} °
						</div>
						<div>Ощущается как: {Math.round(props.state.main.feels_like!)} °C</div>
						<div>Влажность: {props.state.main.humidity}%</div>
						<div>Ветер: {props.state.wind.speed} м/с</div>
					</details>
				</div>
			)}
		</div>
	);
};
