import styled from "styled-components";
import { nanoid } from "nanoid";

import URL from "../../constant";
import { useAppSelector } from "../../store/hooks";

const WrapperUl = styled.ul`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
`;

const StyledLi = styled.li`
  position: relative;
  line-height: 0;
  overflow: hidden;
`;

const StyledSpan = styled.span`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(90, 0, 10, 0.4);
  color: #fff;
  font-size: 1.5em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const StyledImg = styled.img`
  &:hover {
    filter: blur(2px);
  }
`;

function ImgContainer() {
  const images = useAppSelector((state: any) => {
    return state.image.images;
  });

  return (
    <WrapperUl>
      {images &&
        images.map((image: any) => {
          return (
            <StyledLi key={nanoid()}>
              <StyledSpan>{image.name}</StyledSpan>
              <StyledImg
                src={image.image ? image.image.url : URL.DEFAULT_CAT_URL}
                alt={image.name}
              />
            </StyledLi>
          );
        })}
    </WrapperUl>
  );
}

export default ImgContainer;
