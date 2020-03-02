import React, {Component} from 'react';

// function App() {
//   return (
//     <div><h1>hi!</h1></div>
//   );
// }

// export default App;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input id="bar" type="text" onChange={()=>{console.log("iam change");}} />
      </React.Fragment>
    )
  }
}

export default App;