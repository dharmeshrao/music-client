import './App.css';
import { Albums } from './components/Albums';
import { Signin } from './popups/Signin';
import { Songs } from './popups/Songs';
function App() {
  return (
    <div className="App">
      <Signin/>
      <Songs/>
      <Albums/>
    </div>
  );
}

export default App;
