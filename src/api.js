export class Api {
    constructor(options) {
        this.options = options;
    }

    getInitialCards(successCallback) {
        return this.process(fetch(`${this.options.baseUrl}/cards`, {
            headers: this.options.headers
        }), successCallback)

    }

    getUserInfo(successCallback) {
        return this.process(fetch(`${this.options.baseUrl}/users/me`, {
            headers: this.options.headers
        }), successCallback)
    }

    updateUserInfo(name, about, successCallback) {
        this.process(fetch(`${this.options.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.options.headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        }), successCallback)

    }

    process(promise, successCallback) {
        promise
            .then(res => {
                    if (res.ok) {
                        return res.json()
                    } else {
                        return Promise.reject(`Ошибка: ${res.status}`);
                    }
                }
            )
            .then(successCallback)
            .catch(err => console.log(err));
    }

    postCard(name, link, successCallback) {
        this.process(fetch(`${this.options.baseUrl}/cards`, {
            method: 'POST',
            headers: this.options.headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        }), successCallback)
    }

    deleteCard(id, successCallback) {
        this.process(fetch(`${this.options.baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: this.options.headers
        }), successCallback)
    }

}

export const api = new Api({
    baseUrl: NODE_ENV === 'development'
        ? 'http://praktikum.tk/cohort3' : 'https://praktikum.tk/cohort3',
    headers: {
        authorization: '0d5b5599-695b-4d75-afbb-16b992ef7f36',
        'Content-Type': 'application/json'
    }
});