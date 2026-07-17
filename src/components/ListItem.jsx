import styled from "styled-components";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(240, 240, 240);
`;

const CheckBox = styled.input`
  width: 20px;
`;

const Content = styled.div`
  flex: 1;
`;

const DateText = styled.div`
  color: gray;
  font-size: 14px;
`;
const Button = styled.button`
  color: gray;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 5px;
`;
function ListItem({ id, isDone, content, date }) {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const handleUpdate = () => {
    onUpdate(id);
  };
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <Container>
      <CheckBox
        onChange={handleUpdate}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <Content>{content}</Content>
      <DateText>{new Date(date).toLocaleDateString()}</DateText>
      <Button onClick={handleDelete}>삭제</Button>
    </Container>
  );
}

export default memo(ListItem);
// js 객체 타입으로 onUpdate, onDelete가 재생성될 때마다 리렌더링이 발생함
// memo는 얕은 비교로 props 변경을 판단하기 때문
// memo의 두 번째 인자로 props를 비교하는 콜백함수를 받음
// 콜백함수의 return이 F면 리렌더 O, T면 리렌더 X
