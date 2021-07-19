import logo from './logo.svg';
import './App.css';
import ImageUpload from "./components/ImageUpload"
import ImageGrid from './components/ImageGrid';
import FilterMenu from './components/FilterMenu'
import { useState } from "react"

function App() {
  const [filter, setFilter] = useState(null)
  return (
    <div className="App">
      <FilterMenu filter={filter} setFilter={setFilter} />
      <ImageUpload />
      <ImageGrid />

    </div>
  );
}

export default App;
