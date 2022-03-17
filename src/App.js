import Data from "./Profile/Component";
import Image from "./Gilg.jpg"

function App() {
  
  let fun = {fullname:"Mohamed Ali Hammami",bio:"Hello world",profession:"webdevelopper"}
  
  return (
    <div className="App">
      <Data data={fun}>
        <img src={Image}/>
        </Data>
      
    </div>
  );
}

export default App;
