import {useEffect, useState} from "react";
import {deleteCarAPI, editCarAPI, getCar, saveCar} from "../service/car.service";
import Car from "./Car";

export default function Cars(){
    const [cars, setCars] = useState([]);
    const [id, setId] = useState('')
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const [year, setYear] = useState('');
    const [car, setCar] = useState({id: '', model: '', price: '', year: ''})

    useEffect(()=>{
        getCar().then(value => setCars([...value]))
    }, [cars]);

    const deleteCar =(id)=>{
        deleteCarAPI(id).then(value => console.log(value));
        let filterCarsArray = cars.filter(value => value.id !== id);
        setCars([...filterCarsArray]);
    }


    const onSubmitForm = (e) => {
        e.preventDefault();

        let carSave = {id, model, price, year}
        setCar({...carSave});
        saveCar(carSave)
    }


    const onCarIdChange = (e) => {
        let id = e.target.value
        setId(id);

    };
    const onCarModelChange = (e) => {
        let model = e.target.value
        setModel(model);

    };

    const onCarPriceChange = (e) => {
        let price = e.target.value
        setPrice(price);

    };

    const onCarYearChange = (e) => {
        let year = e.target.value;
        setYear(year);

    };

    const onEditCar = (id) => {
        console.log(id);
        const obj = {model, price, year};
        editCarAPI(obj, id)
        setCars([...cars])
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column-reverse'}}>
            {cars.map(value => <Car key={value.id} car={value} deleteCar={deleteCar} onEditCar={onEditCar}/>)}

            <form onSubmit={onSubmitForm}>
                <input type="text" name={'model'} value={model} onChange={onCarModelChange}
                       placeholder={'enter model'}/>
                <input type="number" name={'price'} value={price} onChange={onCarPriceChange}
                       placeholder={'enter price'}/>
                <input type="number" name={'year'} value={year} onChange={onCarYearChange} placeholder={'enter year'}/>
                <button>Save</button>
            </form>
        </div>
    )
}