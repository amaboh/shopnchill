import React from "react";
import {useSelector, useDispatch} from "react-redux"
import { ordered,restocked } from "./coffeSlice";

const CoffeView = () => {
    const numOfCoffee = useSelector(state => state.coffee.numOfCups)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cups of coffee - {numOfCoffee}</h2>
      <button onClick={()=>dispatch(ordered())}>Order coffee </button>
      <button onClick={()=>dispatch(restocked(4))}>Restock coffee</button>
    </div>
  );
};

export default CoffeView;
