import styled from "styled-components";
const Navbar = styled.div`
  height: 70px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #dcdada;
  display: flex;
  align-items: center;
  padding: 20px;
  flex-direction: row-reverse;
  button {
    width: 120px;
    height: 35px;
    background-color: #c22222;
    border-radius: 4px;
    color: white;
    border: none;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const NavbarTop = () => {
  return (
    <Navbar>
      <button>Login</button>
    </Navbar>
  );
};
