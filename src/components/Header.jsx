import styled from "styled-components";

const DateText = styled.h1`
  color: rgb(37, 147, 255);
`;

function Header() {
  return (
    <div>
      <h3>오늘은 📅</h3>
      <DateText>{new Date().toDateString()}</DateText>
    </div>
  );
}

export default Header;
