import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/Submit" component={Submit} />
      <Route path="/Categories" component={Category} />
      <Route path="/Products" component={Products} />
      <Route path="/User" component={User} />
      <Route path="/Permissions" component={Permissions} />
    </div>
  );
}

export default App;
