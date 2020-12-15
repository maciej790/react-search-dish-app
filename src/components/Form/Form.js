import './Form.css';
import Summary from './Summary/Summary'

const Form = () =>{
  return(
    <div className="form">
        <div className="field">
            <input type="text" placeholder="Type how many calories" />
            <button className="add"><i class="fas fa-check-circle fa-2x"></i></button>
        </div>

        <div className="field">
            <input type="text" placeholder="Type how many calories" />
            <button className="add"><i class="fas fa-check-circle fa-2x"></i></button>
        </div>

        <Summary />
    </div>
  )
}

export default Form;
