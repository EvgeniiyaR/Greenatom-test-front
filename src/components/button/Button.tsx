import './Button.css';
import { IButton } from '../../types/';

function Button({ onClick, text }: IButton) {
  return (
    <button className='main__button' type='button' onClick={onClick}>{text}</button>
  )
}

export default Button;