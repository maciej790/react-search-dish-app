import "./App.css";
import Tittle from "./components/Title/Title";
import Form from "./components/Form/Form";
import { useState } from "react";

const App = () => {
  const [calories, setCalories] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [caloriesInput, setCaloriesInput] = useState("");
  const [ingredientsInput, setIngredientsInput] = useState("");

  const handleInputCalories = (e) => {
    setCaloriesInput(e.target.value);
  };

  const handleInputIngrendients = (e) => {
    setIngredientsInput(e.target.value);
  };

  const handleClickCalories = (e) => {
    e.preventDefault();
    setCalories(caloriesInput);
    setCaloriesInput("");
  };

  const handleClickIngredients = (e) => {
    e.preventDefault();
    const Arr = ingredients;
    Arr.push(ingredientsInput);
    setIngredients(Arr);
    setIngredientsInput("");
  };

  return (
    <div className="App">
      <Tittle />
      <Form
        caloriesInput={caloriesInput}
        ingredientsInput={ingredientsInput}
        handleInputCalories={handleInputCalories}
        handleInputIngrendients={handleInputIngrendients}
        handleClickCalories={handleClickCalories}
        handleClickIngredients={handleClickIngredients}
      />

      <button className="submit">Search now</button>
    </div>
  );
};

export default App;
