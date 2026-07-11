import styled from "styled-components";
import ListItem from "./ListItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SearchInput = styled.input`
  padding: 15px;
  font-size: 15px;
  flex: 1;
  border: none;
  border-radius: 5px;
  border-bottom: 1px solid rgb(220, 220, 220);
  &:focus {
    outline: none;
    border-bottom: 1px solid rgb(37, 147, 255);
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
function List() {
  return (
    <Container>
      <h4>Todo List 🔥</h4>
      <SearchInput placeholder="검색어를 입력하세요" />
      <ListContainer>
        <ListItem />
        <ListItem />
        <ListItem />
      </ListContainer>
    </Container>
  );
}

export default List;
