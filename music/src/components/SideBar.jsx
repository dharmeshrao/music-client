import styled from "styled-components";
import { SiApple } from "react-icons/si";
import { RiSearchLine } from "react-icons/ri";
const Style = styled.div`
  width: 300px;
  /* position: fixed; */
  /* top:0; */
  /* z-index: 5; */
  height: 100vh;
  box-shadow: 3px 0px 5px #cecdcd;
  background-color: #eeeded;
  .heading {
    padding: 20px;
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
      :focus{
        outline: none;
      }
    }
    font-size: 25px;
  }
`;

export const SideBar = () => {
  return (
      <Style>
        <div className="heading">
          <SiApple className="logo" />
          <h1>MUSIC</h1>
        </div>
        <div className="searchBox">
          <RiSearchLine />
          <input type="text" placeholder="Search here" />
        </div>
      </Style>
  );
};
