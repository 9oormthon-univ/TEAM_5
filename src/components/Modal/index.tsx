import styled from 'styled-components';
import theme from 'styles/theme';

interface Props {
  open: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ open, setShowModal }: Props) {
  const onClickCloseBtn = () => {
    setShowModal(!open);
  };

  return (
    <StyledModalContent open={open}>
      <StyledCloseBtn onClick={onClickCloseBtn}>X</StyledCloseBtn>
      
    </StyledModalContent>
  );
}

export default Modal;

const StyledModalContent = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  background-color: ${theme.color.white};
  width: 40rem;
  height: 30rem;
  border-radius: 30px;
  flex-shrink: 0;
  padding: 15px;
  z-index: 20;
  position: absolute;
  display: flex;
  margin-top: -13%;
`;

const StyledBookTitle = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  margin-top: 1%;
  color: ${theme.color.black};
  font-size: 28px;
  font-weight: ${theme.fontWeight.bold};
  left: 10%;
  top: 5%;
`;

const StyledInput = styled.input`
  position: absolute;
  display: flex;
  width: 80%;
  height: 60%;
  margin-top: 10%;
  color: ${theme.color.black};
  outline: none;
  border: none;
  :focus {
    outline: none;
    border: none;
  }

  &::placeholder {
    position: absolute;
    display: inline-flex;
    top: 5%;
    left: 10%;
  }
`;
const StyledSubmitBtn = styled.button`
  border-radius: 20px;
  background: rgba(6, 16, 40, 0.4);
  width: 90px;
  height: 25px;
  flex-shrink: 0;
  color: ${theme.color.white};
  font-size: 15px;
  font-weight: ${theme.fontWeight.light};
  float: right;
  display: inline-flex;
  position: absolute;
  justify-content: center;
  right: 5%;
  bottom: 5%;
  padding: 7px 0px 0 0;
`;

const StyledCloseBtn = styled.div`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.26);
  color: ${theme.color.black};
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  z-index: 30;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  right: 5%;
  top: 7%;
`;
