import {configureStore} from '@reduxjs/toolkit'
import cakeReducer from '../features/Cake/cakeSlice'
import coffeeReducer from '../features/coffee/coffeSlice'
import userReducer from '../features/User/userSlice'

// const reduxLogger = require('redux-logger')

// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        coffee: coffeeReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch