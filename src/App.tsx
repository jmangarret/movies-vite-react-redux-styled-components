
import MoviesIndex from "./components/index.component"

import { Provider } from 'react-redux'
import store from './store'

 function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Block Buster App</h1>
        <MoviesIndex />
      </div>
    </Provider>
  )
}

export default App
