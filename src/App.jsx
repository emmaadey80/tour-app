import React, {useState} from "react";
import Gallery from "./components/Gallery";
import './styles/styles.css';

console.log("App rendered"); 

// Root component of the app
function App() {
  // Global state to manage tours
  const [tours, setTours] = useState([]);

  // Function to remove a book by its ID
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      <h1>Tour Comparison</h1>
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </main>
  );
}

export default App;