import {useState} from "react";
import {saveCar} from "../service/car.service";

export default function Form() {
    const [id, setId] = useState('')
    const [model, setModel] = useState('');
    const [price, setPrice] = useState(+'');
    const [year, setYear] = useState(+'');
    const [car, setCar] = useState({id:'', model:'', price:'', year:''})



    const onSubmitForm = (e) => {
        e.preventDefault()
        setCar({...car})
        saveCar(car)
    };

    const onCarIdChange = (e) => {
        setId(e.target.value)
    };
    const onCarModelChange = (e) => {
        setModel(e.target.value)
    };

    const onCarPriceChange = (e) => {
        setPrice(e.target.value)
    };

    const onCarYearChange = (e) => {
        setYear(e.target.value)
    };


    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <input type="text" name={'id'} value={id} onChange={onCarIdChange} placeholder={'enter id'}/>
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