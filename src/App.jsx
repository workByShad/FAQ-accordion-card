import Card from './components/Card';
import './App.css';
import Left from './components/Left';
import Right from './components/Right';

const App = () => {
  return (
    <div className="container full-screen">
      <Card>
        <Left />
        <Right />
      </Card>
    </div>
  );
};

export default App;
