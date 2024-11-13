import './App.css';
import Navbar from './components/Searchbar';
import RecipeCard from './components/RecipeCard';
import Heading from './components/Heading';

function App() {
  return (
    <div className='App'>
      <Heading/>
      <Navbar/>
      <RecipeCard />
    </div>
  );
}

export default App;
