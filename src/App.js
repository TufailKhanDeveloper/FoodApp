import './App.css';
// import Hero from './Hero';
// import Navbar from './Navbar';
import logo from '../src/Assets/Foody Zone (1).svg'
import { useEffect, useState } from 'react';
import FoodCards from './Components/FoodCards/FoodCards';
export const BASE_URL = 'https://serverfoodapp.netlify.app';

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [filteredData, setFilteredData] = useState(null)
  const [selectedBtn, setSelectedBtn] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true)
      setData(null)
      try {
        const response = await fetch(BASE_URL);

        const json = await response.json();
        setData(json)
        setFilteredData(json)
        setLoading(false)
      }

      catch (err) {
        setError("Unable to fetch data");
      }
    }
    fetchFoodData();
  }, [])

  const searchFood = (e) => {
    const searchValue = e.target.value;
    // console.log(searchValue)

    const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()))
    setFilteredData(filter);
  }

  // console.log(data);

  const filterBtns = [ //We have created direclty buttons in array 
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ]

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all")
      // setIsSelected(true)
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    )

    setFilteredData(filter)
    setSelectedBtn(type)
    // setIsSelected(true)
  }

  if (error) return <div>{error}</div>
  if (loading) return <div>loading...</div>

  return (
    <>
      <div className="container">

        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="search">
            <input type="text" placeholder='Enter Food...' onChange={searchFood} />
          </div>
        </div>

        <div className="buttons">
          {/* <button>All </button>
          <button>Breakfast </button>
          <button>Lunch </button>
          <button>All </button> */}
          {
            filterBtns.map((value) => (
              <button key={value.name} onClick={() => filterFood(value.type)} className={selectedBtn===value.type? 'selected' : ''} >
                {value.name}
              </button>
            ))
          }
        </div>

      </div>
      <FoodCards data={filteredData} />

    </>
  );
}

export default App;


/*
background: #FFFFFF;
background: #FF4343;
background: #414141;
background: radial-gradient(80.38% 222.5% at -13.75% -12.36%, #98F9FF 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
// background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
// background: #D9D9D9;
// background: radial-gradient(80.69% 208.78% at 108.28% 112.58%, #EABFFF 0%, rgba(135, 38, 183, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
// background: #0D0D0DC2;
// background: #FF0909;
// background: #FF0A0A;
