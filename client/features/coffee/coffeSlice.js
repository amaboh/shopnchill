const createSlice = require('@reduxjs/toolkit').createSlice

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
})

module.exports = coffeSlice.reducer
module.exports.coffeeActions = coffeSlice.actions