import "./Form.css";
import Summary from "./Summary/Summary";

const Form = ({
  caloriesInput,
  ingredientsInput,
  handleInputCalories,
  handleInputIngrendients,
  handleClickCalories,
  handleClickIngredients,
}) => {
  return (
    <div className="form">
      <form>
        <input
          type="text"
          placeholder="how many calories"
          value={caloriesInput}
          onChange={handleInputCalories}
        />
        <button className="btn_add" onClick={handleClickCalories}>
          <i class="fas fa-check-circle fa-2x"></i>
        </button>

        <input
          type="text"
          placeholder="how many calories"
          value={ingredientsInput}
          onChange={handleInputIngrendients}
        />
        <button className="btn_add" onClick={handleClickIngredients}>
          <i class="fas fa-check-circle fa-2x"></i>
        </button>
      </form>
      <Summary />
    </div>
  );
};

export default Form;
