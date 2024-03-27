import './Form.css'
import Textarea from './Textarea'
function Form() {
  return <div>
    <Textarea/>
    <form className="Form">
    <input className="input" />
    <button className="btn">send</button>
    </form>
    </div>
}

export default Form
