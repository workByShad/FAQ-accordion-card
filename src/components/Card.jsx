import './Card.css';

const Card = (props) => {
  return <div className="border card container">{props.children}</div>;
};

export default Card;
