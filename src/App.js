import './App.css';
import greetings from './hello-world.png';

const imgStyle ={
  image: {
    marginBottom: '30px',
  }
}

function Greetings() {
  return (
    <img src={greetings} 
    alt='Hello world!'
    style={imgStyle.image}/>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Greetings></Greetings>
        <Greetings></Greetings>
        <Greetings></Greetings>
      </header>
    </div>
  );
}

export default App;