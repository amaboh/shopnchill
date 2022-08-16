const createSlice = require('@reduxjs/toolkit').createSlice
const cakeActions = require('../Cake/cakeSlice').cakeActions

const initialState = {
    numOfCups : 30,
}

const coffeSlice = createSlice({
    name: 'coffee',
    initialState,
    reducers: {
        ordered: (state)=>{
            state.numOfCups --
        },
        restocked: (state, action)=>{
            state.numOfCups += action.payload
        },
    },
    // extraReducers: {
    //     ['cake/ordered']: (state)=>{
    //         state.numOfCups --
    //     }
    // }

    extraReducers: (builder)=>{
        builder.addCase(cakeActions.ordered, (state)=>{
            state.numOfCups --
        })
    }
})

module.exports = coffeSlice.reducer
module.exports.coffeeActions = coffeSlice.actions