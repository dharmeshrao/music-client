import styled from "styled-components";

const Style = styled.div`
  width: 250px;
  height: 270px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  div {
    width: 250px;
    height: 220px;
    img {
      object-fit: cover;
      width: 250px;
      border-radius: 4px;
      height: 220px;
    }
  }
  h3{
      padding-top: 4px;
      font-weight: 700;
      color: #6b6a6a;
      font-size: 17px;
  }
  p{
      font: 14px;
      font-weight: 500;
      color: #807d7d;
  }
`;
export const Card = () => {
  return (
    <Style>
      <div>
        <img
          src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWxidW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <h3>From a Bird Eye</h3>
      <p>Cordae</p>
    </Style>
  );
};
