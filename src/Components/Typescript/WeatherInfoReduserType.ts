import { WEATHER_CREATE, DAYS_5 } from '../WeatherInfoReduser';

export type InitialStateType = {
	temp: number | null;
	name: string | null;
	temp_max: number | null;
	temp_min: number | null;
	main: string | null;
	icon: string | null;
	feels_like: number | null;
	humidity: number | null;
	speed: number | null;
	list: Array<{
		dt_txt: string;
		length: number;
		id: number;
		main: { feels_like: number; humidity: number };
		wind: { speed: number };
		weather: Array<{ description: string }>;
	}>;
	description: string | null;
	dt: number | null;
};
export interface WeatherCreateAction {
	type: typeof WEATHER_CREATE;
	payload: {
		data: {
			main: {
				temp: number;
				temp_max: number;
				temp_min: number;
				feels_like: number;
				humidity: number;
			};
			dt: number;
			name: string;
			weather: Array<{ main: string; description: string }>;
			wind: { speed: number };
		};
	};
}
export interface Days_5Action {
	type: typeof DAYS_5;
	payload2: {
		data: {
			list: Array<{
				dt_txt: string;
				length: number;
				id: number;
				main: { feels_like: number; humidity: number };
				wind: { speed: number };
				weather: Array<{ description: string }>;
			}>;
		};
	};
}
export type WeatherActionType = WeatherCreateAction | Days_5Action;

export interface Props {
	state: Array<{
		dt_txt: string;
		length: number;
		id: number;
		main: { feels_like: number; humidity: number };
		wind: { speed: number };
		weather: Array<{ description: string }>;
	}>;
}

export interface PropsInfo {
	state: {
		main: {
			temp: number | null;
			temp_max: number | null;
			temp_min: number | null;
			feels_like: number | null;
			humidity: number | null;
		};
		dt: number | null;
		name: string | null;
		weather: Array<{ main: string | null; description: string | null }>;
		wind: { speed: number | null };
	};
}
