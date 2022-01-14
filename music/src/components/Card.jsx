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
  h3 {
    padding-top: 4px;
    font-weight: 700;
    color: #6b6a6a;
    font-size: 17px;
  }
  p {
    font: 14px;
    font-weight: 500;
    color: #807d7d;
  }
`;
export const Card = ({image,name,artist}) => {
  return (
    <Style>
      <div>
        <img src={image} alt="" />
      </div>
      <h3>{name}</h3>
      <p>{artist}</p>
    </Style>
  );
};
