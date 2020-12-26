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

  postEvent(item) {
    return fetch(`${this._baseUrl}/events`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: item.name,
        imageLink: item.imageLink,
        owner: item.owner,
        date: item.date,
        address: item.address,
        type: item.type,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
      })
      .then((res) => res);
  }
}

const api = new Api({
  baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
