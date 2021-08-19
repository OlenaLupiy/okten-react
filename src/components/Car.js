

export default function Car({car, deleteCar}){
    function dellThisCar (){
        // deletCar(car.id).then(value => {
        //     console.log(value);
            deleteCar(car.id);
        }



    return (
        <div>
            <h3>{car.id} --{car.model} --{car.price} ---{car.year}
            <button onClick={dellThisCar}>Delete</button>
                {/*<button onClick={()=>{}}>Edit</button>*/}
            </h3>
        </div>
    )
}