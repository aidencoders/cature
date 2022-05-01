import styled from "styled-components";

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
  return (
    <StyledForm>
      <StyledInput />
      <StyledButton>Search</StyledButton>
    </StyledForm>
  );
}

export default SearchForm;
