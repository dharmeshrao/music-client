import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { SongContext } from "../context/SongContext";
import {
  getDataError,
  getDataLoading,
  getDataSucess,
} from "../redux/auth/action";
const Navbar = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  flex-direction: row-reverse;
  button {
    width: 120px;
    height: 35px;
    background-color: #ff645a;
    border-radius: 4px;
    color: white;
    border: none;
    font-size: 18px;
    font-weight: 600;
    :hover {
      background: #dc4f4a;
      cursor: pointer;
    }
  }
`;

export const NavbarTop = () => {
  const { handleSignin } = useContext(SongContext);
  const { data } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(getDataLoading());
    try {
      dispatch(getDataSucess([]));
      localStorage.removeItem("acessToken")
    } catch (err) {
      dispatch(getDataError());
    }
  };

  if (data.token) {
    return (
      <Navbar>
        <button onClick={() => handleLogout()}>Logout</button>
      </Navbar>
    );
  }

  return (
    <Navbar>
      <button onClick={() => handleSignin()}>Login</button>
    </Navbar>
  );
};
