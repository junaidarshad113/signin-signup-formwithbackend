
import './App.css';
import TodoForm from './pages/user/signin';
import Regestration from './pages/user/signup';
import { BrowserRouter, Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/"  element= {<TodoForm/>}/>
      <Route path="/signup"  element= {<Regestration/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
