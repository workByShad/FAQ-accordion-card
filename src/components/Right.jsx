import DropdownContainer from './DropdownContainer';
import './Sides.css';
import './Right.css';

const Right = () => {
  return (
    <div className="border right side">
      <h1 className="border">FAQ</h1>
      <DropdownContainer />
    </div>
  );
};

export default Right;
