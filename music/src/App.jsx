import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getDataError, getDataLoading, getDataSucess} from './redux/auth/action'
import { Albums } from './components/Albums';
import { Signin } from './popups/Signin';
import { Songs } from './popups/Songs';
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getDataLoading())
    try{
      let data = localStorage.getItem("acessToken")
      data = JSON.parse(data)
      dispatch(getDataSucess(data || []))
    }
    catch(err){
      dispatch(getDataError())
    }
  },[])


  return (
    <div className="App">
      <Signin/>
      <Songs/>
      <Albums/>
    </div>
  );
}

export default App;
