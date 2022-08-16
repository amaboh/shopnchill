const configStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/Cake/cakeSlice')
const coffeeReducer = require('../features/coffee/coffeSlice')

const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()

const store = configStore({
    reducer: {
        cake: cakeReducer,
        coffee: coffeeReducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})

module.exports = store