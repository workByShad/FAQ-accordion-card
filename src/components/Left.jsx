import './sides.css';
import background from '../assets/images/bg-pattern-desktop.svg';
import box from '../assets/images/illustration-box-desktop.svg';
import woman from '../assets/images/illustration-woman-online-desktop.svg';

const Left = () => {
  return (
    <div className="border side">
      <img src={background} className="background" />
      <img src={woman} className="woman" />
      <img src={box} className="box" />
    </div>
  );
};

export default Left;
