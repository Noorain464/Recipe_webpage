import "./App.css";
import RecipeDetails from "./components/RecipeDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeCards from "./components/RecipeCards";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipeCards />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
