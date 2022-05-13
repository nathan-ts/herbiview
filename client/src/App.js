import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

import { useState } from "react";
import axios from 'axios';
import './App.css';

function App() {
  // Set up state information
  const [state, setState] = useState({
    message: "No message for now."
  });

  // useEffect(() => {

  // }, []);

  const fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      setState({
        message: response.data.message
      });
    }) 
  };

  return (
    <div className="App">
      <h1>{ state.message }</h1>
      <Button variant="contained" onClick={fetchData} >
        Fetch Data
      </Button>
      
    </div>
  );
}

export default App;
