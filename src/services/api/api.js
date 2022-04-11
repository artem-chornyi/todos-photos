const API = 'https://jsonplaceholder.typicode.com/photos?albumId=';

export function getById(id) {
    return fetch(API + id)
        .then(response => response.json());
}