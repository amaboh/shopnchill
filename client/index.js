const store = require('./app/store')
const cakeActions = require('./features/Cake/cakeSlice').cakeActions
const coffeeActions = require('./features/coffee/coffeSlice').coffeeActions
const fetchUsers = require('./features/User/userSlice').fetchUsers


// middleware

console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(()=> {console.log('update state', store.getState())})

store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))


// store.dispatch(coffeeActions.ordered())
// store.dispatch(coffeeActions.ordered())
// store.dispatch(coffeeActions.restocked(4))


// unsubscribe()
