import logo from './logo.svg';
import './App.css';
import Main from './components/main/Main';
import Landing from './containers/Landing';
import store from './store';
import { Provider } from "react-redux";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/create-group" component={Main}/>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
