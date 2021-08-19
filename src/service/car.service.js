const saveCar = (car)=>{
     return fetch('http://195.72.146.25//api/v1/cars', {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => json);
}

const getCar = ()=>{
    return  fetch(`http://195.72.146.25//api/v1/cars`)
        .then(value => value.json())
};

const deleteCarAPI = (id)=>{
     return fetch(`http://195.72.146.25//api/v1/cars/` + id, {
        method: `DELETE`
    })
}

const editCarAPI = (car, id) => {
    return fetch('http://195.72.146.25//api/v1/cars/' + id, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
}


export {saveCar, getCar, deleteCarAPI, editCarAPI}