const url = 'https://api.unsplash.com/photos/?client_id=Token';

export default () => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                return resolve(response);
            })
            .catch(error => {
                return reject(error);
            });

    })
}



