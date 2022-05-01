import React, { ChangeEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchingImageAsync } from "../../features/image/imageSlice";

const StyledForm = styled.form`
  width: 100%;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: space-between;
`;

const StyledInput = styled.input`
  width: 13rem;
  line-height: 1.5rem;
  border: 0.2rem solid ${({ theme }) => theme.color.indigo};
  border-radius: 0.4rem;

  &:focus {
    outline: 0;
  }
`;

const StyledButton = styled.button`
  border-radius: 4px;
  line-height: 1.5rem;
  margin-left: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 0;
  height: 2rem;

  background: ${({ theme }) => theme.color.yellow};
`;

function SearchForm() {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const handleSearchKeywordChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setKeyword(value);
  };

  const handleSearchButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();

    dispatch(fetchingImageAsync(keyword));
  };

  return (
    <StyledForm>
      <StyledInput
        type="text"
        value={keyword}
        onChange={handleSearchKeywordChange}
      />
      <StyledButton onClick={handleSearchButtonClick}>Search</StyledButton>
    </StyledForm>
  );
}

export default SearchForm;
