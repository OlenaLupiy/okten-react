import {useEffect, useState} from "react";
import {deleteCarAPI, getCar} from "../service/car.service";
import Car from "./Car";

export default function Cars(){
    const [cars, setCars] = useState([]);
    useEffect(()=>{
        getCar().then(value => setCars([...value]))
    }, []);

    const deleteCar =(id)=>{
        deleteCarAPI(id).then(value => console.log(value));
        let filterCarsArray = cars.filter(value => value.id !== id);
        setCars([...filterCarsArray]);

    }

    return (
        <div>
            {cars.map(value => <Car key={value.id} car={value} deleteCar={deleteCar} />)}
        </div>
    )
}