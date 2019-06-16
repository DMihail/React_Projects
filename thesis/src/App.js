import React from 'react';
import Tables from './CreateTable';
import VengerTable from './VengerTable';
function App() {
  return (
    <div>

     <span>Enter table parameters</span>
    <VengerTable m = {5} n = {5}/>
    </div>
  );
}

export default App;
