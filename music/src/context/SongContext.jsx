import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {createContext} from 'react'
import { getDataError, getDataLoading, getDataSucess} from '../redux/songs/action'
import axios from 'axios'
export const SongContext = createContext()
export const SongContextProvider = ({children})=>{
    const [toogle,setToogle] = useState(false)
    const [signin,setSignin] = useState(false)
    const handleToogle = ()=>{
        setToogle(toogle ? false : true)
    }
    const handleSignin = (abc)=>{
        setSignin(signin ? false : true)
    }
    const dispatch = useDispatch()
    const handleSongs = async (id)=>{
        dispatch(getDataLoading())
        try{
            const {data} = await axios.get(`https://breakable-gold-outfit.cyclic.app/albums/${id}`)
            dispatch(getDataSucess(data.album))
        }
        catch(err){
            dispatch(getDataError())
        }
    }
    return <SongContext.Provider value={{handleSongs,toogle,handleToogle ,handleSignin,signin}} >{children}</SongContext.Provider>
}