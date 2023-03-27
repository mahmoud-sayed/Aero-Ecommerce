import PagesRoutes from './Helpers/PagesRoutes';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <NavBar />
      <PagesRoutes />
      <Menu />
    </div>
  );
}

export default App;
