import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getDataError, getDataLoading, getDataSucess} from './redux/auth/action'
import { getAlbumError, getAlbumLoading, getAlbumSucess } from './redux/userAlbums/action'
import { Albums } from './components/Albums';
import { Signin } from './popups/Signin';
import { Songs } from './popups/Songs';
import axios from 'axios';
function App() {
  const dispatch = useDispatch()
  const handleUserAlbum = async (here)=>{
    dispatch(getAlbumLoading())
    try{
      const {data} = await axios.get(`https://breakable-gold-outfit.cyclic.app/albums/${here.user.albums[0]._id}`)
    dispatch(getAlbumSucess(data))
    }
    catch(err){
      dispatch(getAlbumError())
    }
  }
  useEffect(()=>{
    dispatch(getDataLoading())
    try{
      let data = localStorage.getItem("acessToken")
      data = JSON.parse(data)
      dispatch(getDataSucess(data || []))
      handleUserAlbum(data)
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
