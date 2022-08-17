
import './App.css'
import CakeView from './features/Cake/CakeView'
import CoffeView from './features/coffee/CoffeView'
import UserView from './features/User/UserView'

function App() {

  return (
    <div className="container">
    <div className="App">
      <CakeView/>
      <CoffeView/>
      <UserView/>
    </div>
    </div>
  )
}

export default App
