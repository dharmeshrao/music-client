import styled from "styled-components";
import { SiApple } from "react-icons/si";
import { RiSearchLine } from "react-icons/ri";
import { useSelector } from "react-redux";
const Style = styled.div`
  width: 300px;
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
      :focus {
        outline: none;
      }
    }
    font-size: 25px;
  }
`;
const NewStyle = styled.div`
  width: 300px;
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
.userDetails{
  padding: 20px;
}
.imgDiv{
    width: 260px;
    display: flex;
    align-items: center;
    margin: auto;
    height: 300px;
    img{
      object-fit: cover;
      width: 100%;
      border-radius: 4px;
    }
  }
  .userForm{
    display: flex;
    flex-direction: column;
    gap:5px;
    label{
      font-weight: 600;
    }
    input{
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
    button{
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
`;

export const SideBar = () => {
  const { data } = useSelector((store) => store.auth);
  if (data.token) {
    return (
      <NewStyle>
        <div className="heading">
          <SiApple className="logo" />
          <h1>Music</h1>
        </div>
        <div className="userDetails">
        <h1>Hiii {data.user.name}</h1>
        <div className="imgDiv">
          <img src={data.user.coverPhoto} alt="" />
        </div>
        <div className="userForm">
        <label htmlFor="">Your Name</label>
        <input placeholder="Update Name" type="text" />
        <label htmlFor="">Your Email</label>
        <input type="text" name="" placeholder="Update Email" id="" />
        <button>Update</button>
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
      <div className="searchBox">
        <RiSearchLine />
        <input type="text" placeholder="Search here" />
      </div>
    </Style>
  );
};
