import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div >
        <PersonCard firstName="Reggie" lastName="Murphree" age={24} hairColor="Brown" />
        <PersonCard firstName="Harold" lastName="Muppet" age={60} hairColor="Gray" />
        <PersonCard firstName="Susie" lastName="Geld" age={64} hairColor="Red" />
        <PersonCard firstName="Percy" lastName="Jackson" age={18} hairColor="Blonde" />
    </div>
  );
}

export default App;
