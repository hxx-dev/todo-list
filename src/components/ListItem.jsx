import styled from "styled-components";

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
function ListItem({ id, isDone, content, date, onUpdate, onDelete }) {
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

export default ListItem;
