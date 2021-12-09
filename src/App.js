import './App.css';
import Login from './controller/system/login/Login';
import Try from './controller/try/Try';
import TryClass from './controller/try/TryClass';


function App() {
  return (
    <div className="App">
        <Try name="React"></Try>      
        <TryClass name="React"></TryClass>   
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Login name="Mark" />
    </div>
  );
}

export default App;
