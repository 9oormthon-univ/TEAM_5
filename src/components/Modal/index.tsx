import styled from 'styled-components';
import theme from 'styles/theme';

interface Props {
  open: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  component: JSX.Element;
}

function Modal({ open, setShowModal, component }: Props) {
  const onClickCloseBtn = () => {
    setShowModal(!open);
  };

  return (
    <StyledWrapper>
      <StyledModalContent open={open}>
        <StyledCloseBtn onClick={onClickCloseBtn}>X</StyledCloseBtn>
        {component}
      </StyledModalContent>
    </StyledWrapper>
  );
}

export default Modal;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModalContent = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  background-color: ${theme.color.white};
  width: 42rem;
  height: 30rem;
  border-radius: 30px;
  flex-shrink: 0;
  padding: 0 15px;
  z-index: 20;
  position: absolute;
  display: flex;
 
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
