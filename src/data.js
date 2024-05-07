import Unplash from './assets/unplash.jpg'
import Weather from './assets/weather.jpg'
import Calculator from './assets/caluclator.jpg'
import Topmenu from './assets/Topmenu.jpg'
import { nanoid } from 'nanoid'

export const Porto_details = [
    {
      id : nanoid(),
      title : "Unplash image",
      img : Unplash,
      url : 'https://koffi-unplash-images.netlify.app/',
      description : 'An Unsplash image application allows users to search and browse high-quality, royalty-free images from the Unsplash API. Users can enter keywords or categories to find images.'
    },{
      id : nanoid(),
      title : "Weather App",
      img : Weather,
      url : 'https://koffi-weather.netlify.app/',
      description : 'A weather application retrieves real-time weather data from an API, such as OpenWeatherMap. Users input their location, and the app displays current weather conditions, including temperature, humidity, wind speed, and weather description.'
    },{
      id : nanoid(),
      title : "Basic calculator",
      img : Calculator,
      url : 'https://koffi-calculator.netlify.app/',
      description : 'A calculator app provides basic arithmetic functions such as addition, subtraction, multiplication, and division. Users input numerical values and operations via a user-friendly interface, with buttons for each digit and operation.'
    },{
      id : nanoid(),
      title : "Food Menu App",
      img : Topmenu,
      url : 'https://koffi-menu.netlify.app/',
      description : 'A food menu app allows users to browse a variety of dishes offered by restaurants or food establishments. Users can search for specific items, view detailed descriptions and images of each dish, and check prices and availability'
    }
]

// export const backend = [
//     {    
//         id : 1,
//         icon : <ImCheckboxChecked/>,
//         title : "Node.js",
//         level : "Intermadiate"
//     },{   
//           id : 2,
//           icon : <ImCheckboxChecked/>,
//           title : "Express.js",
//           level : "Intermediate"
//         },{
//             id : 3,  
//           icon : <ImCheckboxChecked/>,
//           title : "Python",
//           level : "Basic"
//         },{
//             id : 4,
//           icon : <ImCheckboxChecked/>,
//           title : "Java",
//           level : "Intermediate"
//         },{
//             id : 5,
//           icon : <ImCheckboxChecked/>,
//           title : "MySql",
//           level : "Intermediate"
//         },{
//             id : 6,
//           icon : <ImCheckboxChecked/>,
//           title : "PHP",
//           level : "Intermediate"
//         }
// ]

