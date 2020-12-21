class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _getResponseData(path, params) {
    return fetch(`${this._baseUrl}${path}`, params).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    });
  }

  getInitialEvents() {
    return this._getResponseData('/events');
  }
}

const api = new Api({
  baseUrl: 'https://localhost:27017',
});

export default api;
