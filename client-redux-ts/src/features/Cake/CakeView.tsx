import {useState} from 'react';
// import { useSelector,useDispatch } from 'react-redux';
import {useAppSelector, useAppDispatch} from '../../app/hooks'
import {ordered, restocked} from './cakeSlice'

const CakeView = () => {
    const [value, setValue] = useState(1)
    const numOfCake = useAppSelector((state)=> state.cake.numOfCakes)
    const dispatch = useAppDispatch()
    
  return (
    <div>
        <h2>Number of cakes - {numOfCake}</h2>
        <button onClick={()=> dispatch(ordered())}>Order cake</button>
        <input type='number' value={value} onChange={e => setValue(parseInt(e.target.value))}/>
        <button onClick={()=> dispatch(restocked(4))}>Restock cakes</button>
    </div>
  )
}

export default CakeView