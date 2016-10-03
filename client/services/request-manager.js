function makeRequest (url) {
	return fetch(url)
	.then(res => {
		return res.json();
	})
}

class RequestManager {
	static get(url) {
		return makeRequest(url);
	}
}

export default {
	get: RequestManager.get,
}
