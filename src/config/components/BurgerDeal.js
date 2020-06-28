import React from 'react';
import data from '../config/data.json';

const burgerList = data.Burgers;
let result = burgerList.map(s => s.name);

const BurgerDeal = () => {
  return (
    <div>
      <ul>
        Today's Burger of the day: <span className="blink">{result[0]}</span>
      </ul>
    </div>
  );
}

export default BurgerDeal;