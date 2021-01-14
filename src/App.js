import './css/App.css';
import {BrowserRouter} from 'react-router-dom';
import Index from "./Components/Menu/Index";
import RoutesWeb from "./Components/RoutesWeb/RoutesWeb";


function App() {
 
  return (
    <BrowserRouter>
        <Index/>
        <RoutesWeb/>
    </BrowserRouter>
  );
}

export default App;
