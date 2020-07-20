import React from "react";

// class App extends Component {
//   render() {
//     return (
//       <>
//         <label htmlFor="bar">bar</label>
//         <input
//           id="bar"
//           type="text"
//           onChange={() => {
//             console.log("clicked!");
//           }}
//         />
//       </>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};

const Cat = () => {
  return <div>Meow!</div>;
};

export default App;
