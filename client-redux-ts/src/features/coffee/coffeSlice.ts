import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ordered as cakeOrdered} from '../Cake/cakeSlice'


type InitialState={
    numOfCups: number
}
const initialState: InitialState = {
    numOfCups : 30,
}

const coffeSlice = createSlice({
    name: 'coffee',
    
    initialState,
    reducers: {
        ordered: (state)=>{
            state.numOfCups --
        },
        restocked: (state, action: PayloadAction<number>)=>{
            state.numOfCups += action.payload
        },
    },
    // extraReducers: {
    //     ['cake/ordered']: (state)=>{
    //         state.numOfCups --
    //     }
    // }

    extraReducers: (builder)=>{
        builder.addCase(cakeOrdered, (state)=>{
            state.numOfCups --
        })
    }
})

export default coffeSlice.reducer
export const {ordered, restocked} = coffeSlice.actions