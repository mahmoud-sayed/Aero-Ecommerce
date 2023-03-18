import { Link } from 'react-router-dom';
import './App.css';
import PagesRoutes from './Helpers/PagesRoutes';

function App() {
  return (
    <div className="App">
      <PagesRoutes />
      <Link to='/login'>login</Link>
    </div>
  );
}

export default App;
