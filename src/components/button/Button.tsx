import './Button.css';
import { IButton } from '../../types/';

function Button({ onClick, text, type }: IButton) {
  return (
    <button className='main__button' type={type} onClick={onClick}>{text}</button>
  )
}

export default Button;