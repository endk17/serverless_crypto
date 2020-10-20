// import useState and useEffect hooks from React
import React, {useState, useEffect} from 'react';

// import the API category from AWS Amplify
import { API } from 'aws-amplify';

import './App.css';

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);



function App() {
  // Create coins variable and set to empty array
  const [coins, updateCoins] = useState([])

  // Define function to call API
  async function fetchCoins() {
    try { 

      console.log('Adding API connection');
      const data = await API.get('cryptoapi', '/coins')
      updateCoins(data.coins)

    } catch (error) {

      console.log(error)
      
    }
  }

  // Call fetchCoins function when component loads
  useEffect(() => {
    fetchCoins()
  }, [])

  return (
    <div className="App">
      {
        coins.map((coin, index) => (
          <div key={index}>
            <h2>{coin.name} - {coin.symbol}</h2>
            <h5>${coin.price_usd}</h5>
          </div>
        ))
      }
    </div>
  );
}

export default App;