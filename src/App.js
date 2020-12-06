import logo from './logo.svg';
import './App.css';
import Main from './components/main/Main';
import store from './store';
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main/>
      </div>
    </Provider>
  );
}

export default App;
