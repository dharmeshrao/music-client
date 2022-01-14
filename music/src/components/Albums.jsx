import styled from "styled-components";
import { Card } from "./Card";
import { NavbarTop } from "./Navbar";
import { SideBar } from "./SideBar";

const Style = styled.div`
  display: grid;
  gap: 35px;
  grid-template-columns: 300px 1fr 5px;
  .browseMusic{
      font-size: 25px;
      font-weight: 600;
      margin-bottom: 20px;
  }
  .Shadow{
      width:100%;
      border:1px solid #eeeded;
      margin-bottom: 20px;
  }
  .cardDiv{
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
  }
`;
export const Albums = () => {
  return (
    <Style>
      <SideBar />
      <div>
          <NavbarTop/>
          <div className="Shadow"></div>
          <div className="browseMusic"><p>Browse albums here</p></div>
          <div className="cardDiv">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
          </div>
      </div>
    </Style>
  );
};
