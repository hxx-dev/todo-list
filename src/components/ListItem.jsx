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

const Date = styled.div`
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
function ListItem() {
  return (
    <Container>
      <CheckBox type="checkbox" />
      <Content>todo~~</Content>
      <Date>date</Date>
      <Button>삭제</Button>
    </Container>
  );
}

export default ListItem;
