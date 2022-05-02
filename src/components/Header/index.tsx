import styled from "styled-components";

const WrapperHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 1.5em 0;
`;

const StyledP = styled.p`
  font-size: 2em;
`;

function Header() {
  return (
    <WrapperHeader>
      <StyledP>😸 고양이 사진 갤러리 😻</StyledP>
    </WrapperHeader>
  );
}

export default Header;
