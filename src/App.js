import Routes from "./routes";
import './App.css'
import Menu from './components/Menu'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
