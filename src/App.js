// import { BrowserRouter as Router, Route } from 'react-router-dom'
import FormComp from "./components/FormComp";
import ListComp from './components/ListComp';

function App() {
  return (
  // <Router>
      <div className="App">
      <FormComp/>
      <ListComp />
        {/* <div>
          <Route exact path = '/create' component ={FormComp} />
        </div> */}
      </div>
    // </Router>
  );
}

export default App;
