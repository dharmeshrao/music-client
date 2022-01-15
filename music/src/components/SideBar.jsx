import styled from "styled-components";
import { SiApple } from "react-icons/si";
import { RiSearchLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { SongContext } from "../context/SongContext";
import debounce from "lodash.debounce";
import { GrCirclePlay } from 'react-icons/gr'
import { SiTorbrowser } from 'react-icons/si'
import { FiRadio, FiPlay } from 'react-icons/fi'
import {
  getDataError,
  getDataLoading,
  getDataSucess,
} from "../redux/auth/action";
import { useCallback } from "react";
const Style = styled.div`
  width: 300px;
  height: 100vh;
  box-shadow: 1px 0px 8px #827f7f;
  background-color: #eeeded;
  .heading {
    padding: 20px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    h1 {
      font-weight: 700;
      font-size: 25px;
    }
    .logo {
      display: flex;
      align-items: center;
      font-size: 30px;
      cursor: pointer;
    }
  }
  .searchBox {
    background-color: white;
    border-radius: 4px;
    border: 1px solid #cecdcd;
    width: 85%;
    height: 40px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    input {
      background-color: transparent;
      border: none;
      padding: 8px;
      width: 100%;
      height: 30px;
      :focus {
        outline: none;
      }
    }
    font-size: 25px;
  }
  .hiddenslide {
    display: flex;
    flex-direction: column;
    .slide {
      height: 50vh;
      width: 84%;
      margin: auto;
      background-color: white;
      box-shadow: 0px 6px 6px gray;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      overflow: scroll;
      overflow-x: hidden;
      /* width */
      ::-webkit-scrollbar {
        width: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #f89c95;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
      div {
        padding: 15px;
        border-bottom: 1px solid #cccaca;
        display: flex;
        align-items: center;
        height: 35px;
        color: #ff645a;
        font-weight: 600;
        width: 100%;
        border-radius: 5px;
        :hover {
          background-color: #f2f1f1;
          cursor: pointer;
        }
      }
    }
  }
  .Buttons{
    display: flex;
    flex-direction: column;
    padding: 20px;
    div{
      display: flex;
      gap: 20px;
      width: 166px;
      border-radius: 4px;
      padding: 10px;
      align-items: center;
      .redclr{
        color: #ff645a;
        font-size: 25px;
      }
      p{
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
`;
const NewStyle = styled.div`
  width: 300px;
  height: 100vh;
  box-shadow: 1px 0px 8px #827f7f;

  background-color: #eeeded;
  .heading {
    padding: 20px;
    display: flex;
    margin-left: 20px;
    align-items: center;
    h1 {
      font-weight: 700;
      font-size: 25px;
    }
    .logo {
      display: flex;
      align-items: center;
      font-size: 30px;
      cursor: pointer;
    }
  }
  .userDetails {
    padding: 20px;
  }
  .imgDiv {
    width: 260px;
    display: flex;
    align-items: center;
    margin: auto;
    height: 300px;
    img {
      object-fit: cover;
      width: 100%;
      border-radius: 4px;
    }
  }
  .userForm {
    display: flex;
    flex-direction: column;
    gap: 5px;
    label {
      font-weight: 600;
    }
    input {
      height: 40px;
      border: none;
      border-radius: 4px;
      padding: 6px;
      border: 1px solid #cecdcd;
      margin-bottom: 15px;
      background-color: white;
      :focus {
        outline: none;
      }
    }
    button {
      background-color: #ff645a;
      border: none;
      width: 120px;
      height: 35px;
      font-size: 18px;
      font-weight: 600;
      color: white;
      border-radius: 4px;
      padding: 5px;
      :hover {
        background: #dc4f4a;
        cursor: pointer;
      }
    }
  }
  .warning {
    color: #084d2f;
    margin-bottom: 10px;
    /* text-align: center; */
  }
  .name{
    font-size: 28px;
  }
`;

export const SideBar = () => {
  const [payload, setPayload] = useState({
    name: "",
    email: "",
  });
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.auth);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [detail, setDetail] = useState(false);
  const [complete, setComplete] = useState(false);
  const [slide, setSlide] = useState([]);
  const { handleSongs, handleToogle } = useContext(SongContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload({
      ...payload,
      [name]: value,
    });
  };
  const handleLogout = () => {
    dispatch(getDataLoading());
    try {
      dispatch(getDataSucess([]));
      localStorage.removeItem("acessToken");
    } catch (err) {
      dispatch(getDataError());
    }
  };
  const handleUpdate = async () => {
    if (!payload.name.trim || !payload.email.trim()) {
      setDetail(true);
      return false;
    }
    setLoad(true);
    try {
      setDetail(false);
      let id = data.user._id;
    await axios.patch(
        `https://breakable-gold-outfit.cyclic.app/artists/${id}`,payload
      );
      setLoad(false);
      setComplete(true);
      handleLogout();
    } catch (err) {
      setLoad(false);
      setError(true);
    }
  };
  const handleChangeAgain = (e) => {
    if(e.target.value.trim().length <= 1){
      setSlide([]);
      return;
    }
    handleDebounce(e.target.value);
  };

  const handleDebounce = useCallback(
    debounce((next) => {
      if(next.trim().length <= 1){setSlide([]);return}
      fetch(`https://breakable-gold-outfit.cyclic.app/albums/search/?q=${next}`)
        .then((res) => res.json())
        .then((data) => setSlide(data.album));
    }, 500),
    []
  );
  const handleSongsTwo = (e)=>{
    handleSongs(e);
    handleToogle();
  }

  if (data.token) {
    return (
      <NewStyle>
        <div className="heading">
          <SiApple className="logo" />
          <h1>Music</h1>
        </div>
        <div className="userDetails">
          <h1 className="name">Hiii {data.user.name}</h1>
          <div className="imgDiv">
            <img src={data.user.coverPhoto} alt="" />
          </div>
          <div className="userForm">
            <label htmlFor="">Your Name</label>
            <input
              placeholder={data.user.name}
              name="name"
              value={payload.name}
              onChange={(e) => handleChange(e)}
              type="text"
            />
            <label htmlFor="">Your Email</label>
            <input
              type="text"
              name="email"
              value={payload.email}
              onChange={(e) => handleChange(e)}
              placeholder={data.user.email}
              id=""
            />
            <p className="warning">
              {load
                ? "loading..."
                : error
                ? "Something went wrong"
                : detail
                ? "Fill all details"
                : complete
                ? "Updated Sucessfully"
                : ""}
            </p>
            <button onClick={() => handleUpdate()}>Update</button>
          </div>
        </div>
      </NewStyle>
    );
  }

  return (
    <Style>
      <div className="heading">
        <SiApple className="logo" />
        <h1>MUSIC</h1>
      </div>
      <div className="hiddenslide">
        <div className="searchBox">
          <RiSearchLine />
          <input
            type="text"
            onChange={(e) => handleChangeAgain(e)}
            placeholder="Search here"
          />
        </div>
        {slide.length > 0 ? (
          <div className="slide">
            {slide.map((e) => (
              <div onClick={()=>handleSongsTwo(e._id)} key={e._id}>{e.name}</div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="Buttons">
       <div>
         <FiPlay className="redclr"/>
         <p>Listen Now</p>
       </div>
       <div>
         <SiTorbrowser className="redclr"/>
         <p>Browse</p>
       </div>
       <div>
         <FiRadio className="redclr"/>
         <p>Radio</p>
       </div>
      </div>
    </Style>
  );
};
