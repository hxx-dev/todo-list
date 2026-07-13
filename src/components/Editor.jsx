import styled from "styled-components";
import { useState, useRef, useContext } from "react";
import { TodoContext } from "../App";

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
  const [content, setContent] = useState("");
  const { onCreate } = useContext(TodoContext);
  const contentRef = useRef();

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  return (
    <Container>
      <Input
        ref={contentRef}
        value={content}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        placeholder="새로운 todo..."
      />
      <Button onClick={onSubmit}>추가</Button>
    </Container>
  );
}

export default Editor;
