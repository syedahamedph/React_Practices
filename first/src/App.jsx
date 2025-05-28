import { Subject } from "./Subject";
import Greeting from "./Greeting";
function App() {
  return (
    <>
      <h3>Tutorial App</h3>
      <Subject name="java" content="JAVA IS OOPL" />
      <Subject name="C" content="C is procedural language" />
      <Subject name="Python" content="Python is dynamic language" />
      <Greeting name="Syed Ahamed"></Greeting>
      <hr></hr>
      <Greeting name="Naruto Uzumaki"></Greeting>
      <hr></hr>
      <Greeting name="Sasuke uchiha"></Greeting>
      <hr></hr>
    </>
  );
}

export default App;
