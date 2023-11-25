import './Sides.css';
import './Left.css';
import background from '../assets/images/bg-pattern-desktop.svg';
import woman from '../assets/images/illustration-woman-online-desktop.svg';
import box from '../assets/images/illustration-box-desktop.svg';

const Left = () => {
  return (
    <div className="border left side">
      <img src={background} className="bgw" />
      <img src={woman} className="bgw" />
      <img src={box} className="box" />
    </div>
  );
};

export default Left;
