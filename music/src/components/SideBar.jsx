import styled from "styled-components";
import { SiApple } from "react-icons/si";
import { RiSearchLine} from 'react-icons'
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
`;
export const SideBar = () => {
  return (
    <Style>
      <div className="heading">
        <SiApple className="logo" />
        <h1>MUSIC</h1>
      </div>
      <div>
          <input type="text" />

      </div>
    </Style>
  );
};
