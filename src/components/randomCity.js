import cities from './cities.json';
import { Platform } from 'react-native';


let i = 0;

 const randomCity = () =>{

    const { city } = cities[Math.floor(Math.random() * cities.length)];
    i += 1;

   let color = {
        color: '#EFEAEA',
    };

    return Platform.select({
        ios: {
            id: `${city}--${i}`,
            text: city,
            color:'#EFEAEA',
            selectedColor:'#9D7CE6',
            selectedScale: Math.floor(Math.random() * 1.5) + 1.2,
        },
        android: {
            id: `${city}--${i}`,
            text: city,
            selectedColor:'#9D7CE6',
            selectedScale: Math.floor(Math.random() * 1.5) + 1.2,
            backgroundColor:'#9D7CE6',
            ...color,
        },
    });
}
export default randomCity
