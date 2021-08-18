const url = 'http://jsonplaceholder.typicode.com/'
const getUsers = () => {
    return fetch(url + 'users/')
        .then(value => value.json())
}


const getUser = (id)=>{
    return fetch(url + 'users/' + id)
        .then(value => value.json())
}


export {getUsers, getUser}