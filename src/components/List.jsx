import styled from "styled-components";
import ListItem from "./ListItem";
import { useState, useMemo } from "react";

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
function List({ todos, onUpdate, onDelete }) {
  const [search, setSearch] = useState("");

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    //useMemo로 최적화
    //deps가 변경될 때만 콜백함수 실행
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase());
    });
  };
  const filteredTodos = getFilteredData();
  return (
    <Container>
      <h4>Todo List 🔥</h4>
      <div>
        <div>total : {totalCount}</div>
        <div>Done : {doneCount}</div>
        <div>notDone : {notDoneCount}</div>
      </div>
      <SearchInput
        value={search}
        onChange={handleChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <ListContainer>
        {filteredTodos.map((todo) => {
          return (
            <ListItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </ListContainer>
    </Container>
  );
}

export default List;
