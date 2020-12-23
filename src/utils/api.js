class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getResponseData(path, params) {
    return fetch(`${this._baseUrl}${path}`, params).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    });
  }

  getInitialEvents(data) {
    return this._getResponseData('/events', {
      headers: this._headers,
      method: 'GET',
      body: JSON.stringify(data),
    });
  }
}

const api = new Api({
  baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
