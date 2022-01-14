import { useContext } from "react";
import styled from "styled-components";
import { SongContext } from "../context/SongContext";
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
  return (
    <Navbar>
      <button onClick={() => handleSignin()}>Login</button>
    </Navbar>
  );
};
