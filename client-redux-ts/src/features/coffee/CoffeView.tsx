import React from "react";
// import {useSelector, useDispatch} from "react-redux"
import {useAppSelector, useAppDispatch} from "../../app/hooks"
import { ordered,restocked } from "./coffeSlice";

const CoffeView = () => {
    const numOfCoffee = useAppSelector(state => state.coffee.numOfCups)
    const dispatch = useAppDispatch ()
  return (
    <div>
      <h2>Number of cups of coffee - {numOfCoffee}</h2>
      <button onClick={()=>dispatch(ordered())}>Order coffee </button>
      <button onClick={()=>dispatch(restocked(4))}>Restock coffee</button>
    </div>
  );
};

export default CoffeView;
