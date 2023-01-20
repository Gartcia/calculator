import './App.css';
import CalculatorConteiner from './components/CalculatorConteiner'

function App() {
  return (
    <div className="App w-100 vh-100 d-flex flex-column justify-content-center align-items-center bg-dark-subtle">
      <h1 className='fs-1 p-4 fw-bolder'>Calculator App</h1>
      <CalculatorConteiner />
    </div>
  );
}

export default App;
