import randomCity from "./randomCity";

const randomCities = () =>{
    return [...Array(15).keys()].map(randomCity);

 }

 export default randomCities