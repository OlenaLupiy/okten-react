// import {useState} from "react";
// import {saveCar} from "../service/car.service";
//
// export default function Form() {
//     const [id, setId] = useState('')
//     const [model, setModel] = useState('');
//     const [price, setPrice] = useState(+'');
//     const [year, setYear] = useState(+'');
//     const [car, setCar] = useState({id: '', model: '', price: '', year: ''})
//
//
//     const onSubmitForm = (e) => {
//         e.preventDefault();
//
//         let carSave = {id, model, price, year}
//         setCar({...carSave});
//         saveCar(carSave)
//     }
//
//
//     const onCarIdChange = (e) => {
//         let id = e.target.value
//         setId(id);
//
//     };
//     const onCarModelChange = (e) => {
//         let model = e.target.value
//         setModel(model);
//
//     };
//
//     const onCarPriceChange = (e) => {
//         let price = e.target.value
//         setPrice(price);
//
//     };
//
//     const onCarYearChange = (e) => {
//         let year = e.target.value;
//         setYear(year);
//
//     };
//
//
//     return (
//         <div>
//             <form onSubmit={onSubmitForm}>
//                 <input type="text" name={'id'} value={id} onChange={onCarIdChange} placeholder={'enter id'}/>
//                 <input type="text" name={'model'} value={model} onChange={onCarModelChange}
//                        placeholder={'enter model'}/>
//                 <input type="number" name={'price'} value={price} onChange={onCarPriceChange}
//                        placeholder={'enter price'}/>
//                 <input type="number" name={'year'} value={year} onChange={onCarYearChange} placeholder={'enter year'}/>
//                 <button>Save</button>
//             </form>
//
//         </div>
//     )
// }