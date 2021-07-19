import logo from './logo.svg';
import './App.css';
import ImageUpload from "./components/ImageUpload"
import ImageGrid from './components/ImageGrid';
import FilterText from './components/FilterText'
import { useState } from "react"

function App() {
  const [filter, setFilter] = useState(["praia"])

  return (
    <div className="App">
      <FilterText filter={filter} setFilter={setFilter} />
      <ImageUpload />
      <ImageGrid filter={filter} />
    </div>
  );
}

export default App;
