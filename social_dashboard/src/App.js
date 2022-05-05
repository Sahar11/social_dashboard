import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        console.log("response", res.data);
        setState(res.data);
      })
      .catch((error) => console.log(`Error: ${error}`));
  }, []);
  
  return ( state.map((user) => {
    <div key={user.id}>user.firstname</div>
  })
    
  );
}

export default App;
