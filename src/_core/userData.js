import axios from "axios";

export default class UserData {
    getUserData() {
        try {
			let axiosPromise = axios.get(`https://randomuser.me/api`, {
				headers: {
                    "content-type": "application/json"
                },
			})

			return new Promise((resolve, reject) => {
				try {
					axiosPromise
						.then(response => {
							if (response.status == 200) {
								resolve(response.data)
							}
							else {
								reject(response)
							}
						})
						.catch((error) => {
							reject(error.response);
						})
				}
				catch (error) {
					reject(error)
				}
			})
		}
		catch (error) {
			throw error;
		}

    }
}