import { IConfig } from '../types/';

class Api {
  private _url: string;
  private _headers: HeadersInit;
  private _acceptedCors: string;
	constructor(config: IConfig) {
		this._url = config.url;
		this._headers = config.headers;
    this._acceptedCors = 'https://cors-anywhere.herokuapp.com/';
	}

	_checkResponse(res: Response) {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Ошибка: ${res.status}`);
	}

	getQuote() {
		return fetch(this._acceptedCors + this._url, {
			method: "GET",
			headers: this._headers
		}).then((res) => this._checkResponse(res));
	}
}

const api = new Api({
  url: 'https://api.forismatic.com/api/1.0/?method=getQuote&key=random&format=json&lang=ru&json=?',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;