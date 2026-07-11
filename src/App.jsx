import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import styled from "styled-components";

const Container = styled.div`
  /* 세로로 배치, flex를 사용하면 div태그 가로로 배치됨 이때 방향 colomn 사용 -> 세로로 */
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* 가운데로 정렬 */
  width: 500px;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <Header />
      <Editor />
      <List />
    </Container>
  );
}

export default App;
