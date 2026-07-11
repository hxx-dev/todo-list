import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import styled from "styled-components";
import { useState, useRef } from "react";

const Container = styled.div`
  /* 세로로 배치, flex를 사용하면 div태그 가로로 배치됨 이때 방향 colomn 사용 -> 세로로 */
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* 가운데로 정렬 */
  width: 500px;
  margin: 0 auto;
`;

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "react 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "운동하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "백엔드 공부하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]); // 상태 변환 함수를 사용
  };
  return (
    <Container>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </Container>
  );
}

export default App;
