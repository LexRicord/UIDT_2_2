import React from 'react';
import './App.css';
import FilterableProductTable from './Components/FilterableProductTable';
import pr from './state';

const App = () => {
  
  return (
    <FilterableProductTable products={pr}/>
  );
}

export default App;
