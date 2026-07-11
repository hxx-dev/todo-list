import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  height: 48px;
`;

const Input = styled.input`
  flex: 1;
  padding: 15px;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 5px;
`;

const Button = styled.button`
  width: 80px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: rgb(37, 147, 255);
  cursor: pointer;
`;

function Editor() {
  return (
    <Container>
      <Input placeholder="새로운 todo..." />
      <Button>추가</Button>
    </Container>
  );
}

export default Editor;
