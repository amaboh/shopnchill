const configStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/Cake/cakeSlice')
const coffeeReducer = require('../features/coffee/coffeSlice')

const store = configStore({
    reducer: {
        cake: cakeReducer,
        coffee: coffeeReducer
    }
})

module.exports = store