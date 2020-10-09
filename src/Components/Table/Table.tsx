import React, { useState } from 'react';
import s from './Table.module.css';
import { Props } from '../Typescript/WeatherInfoReduserType';

const Table = (props: Props) => {
	const [ buttonNumber, setbuttonNumber ] = useState(1);
	const arr = [];
	let date = new Date();

	//отображение таблицы текущего дня

	if (props.state.length !== 0) {
		switch (buttonNumber) {
			case 1:
				for (let i = 0; i < props.state.length; i++) {
					if (
						props.state[0].dt_txt[9] === props.state[i].dt_txt[9] &&
						props.state[0].dt_txt[8] === props.state[i].dt_txt[8]
					) {
						var data = props.state[i];
						arr.push(data);
					}
				}

				break;
			case 2:
				for (let i = 0; i < props.state.length; i++) {
					if (
						props.state[10].dt_txt[9] === props.state[i].dt_txt[9] &&
						props.state[10].dt_txt[8] === props.state[i].dt_txt[8]
					) {
						data = props.state[i];
						arr.push(data);
					}
				}
				break;
			case 3:
				for (let i = 0; i < props.state.length; i++) {
					if (
						props.state[20].dt_txt[9] === props.state[i].dt_txt[9] &&
						props.state[20].dt_txt[8] === props.state[i].dt_txt[8]
					) {
						data = props.state[i];
						arr.push(data);
					}
				}
				break;
			case 4:
				for (let i = 0; i < props.state.length; i++) {
					if (
						props.state[30].dt_txt[9] === props.state[i].dt_txt[9] &&
						props.state[30].dt_txt[8] === props.state[i].dt_txt[8]
					) {
						data = props.state[i];
						arr.push(data);
					}
				}
				break;
			default:
				for (let i = 0; i < props.state.length; i++) {
					if (
						props.state[0].dt_txt[9] === props.state[i].dt_txt[9] &&
						props.state[0].dt_txt[8] === props.state[i].dt_txt[8]
					) {
						data = props.state[i];
						arr.push(data);
					}
				}
		}
	}

	return (
		<div className={s.container}>
			{props.state.length !== 0 && (
				<div>
					<button className={s.buttons} onClick={() => setbuttonNumber(1)}>
						{date.getDate()}.{'0' + date.getMonth()}
					</button>
					<button className={s.buttons} onClick={() => setbuttonNumber(2)}>
						{date.getDate() + 1}.{'0' + date.getMonth()}
					</button>
					<button className={s.buttons} onClick={() => setbuttonNumber(3)}>
						{date.getDate() + 2}.{'0' + date.getMonth()}
					</button>
					<button className={s.buttons} onClick={() => setbuttonNumber(4)}>
						{date.getDate() + 3}.{'0' + date.getMonth()}
					</button>
					<table className={s.table}>
						<thead>
							<tr>
								<th>Время</th>
								<th>Температура (°C)</th>
								<th>Описание</th>
								<th>Влажность (%)</th>
								<th>Скорость ветра (м/с)</th>
							</tr>
						</thead>
						<tbody>
							{arr.map((item) => (
								<tr key={item.id}>
									<td>{item.dt_txt.substring(11, 16)}</td>
									<td>{Math.round(item.main.feels_like)}</td>
									<td>{item.weather[0].description}</td>
									<td>{item.main.humidity}</td>
									<td>{item.wind.speed}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default Table;
