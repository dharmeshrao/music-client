import './App.css';
import { Albums } from './components/Albums';
import { Songs } from './popups/Songs';
function App() {
  return (
    <div className="App">
      <Songs/>
      <Albums/>
    </div>
  );
}

export default App;
