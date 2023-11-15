import primary from 'assets/images/primary.png';
import Button from 'components/Button';
import media from 'constants/media';
import styled from 'styled-components';
import theme from 'styles/theme';

function LinkShare() {
  return (
    <StyledWrapper>
      <StyledInWrapper>
        <StyledImgWrapper>
          <img src={primary} alt="체크 표시된 구름" />
        </StyledImgWrapper>
        <StyledQuestion>모임을 누구와 공유하시겠어요?</StyledQuestion>
        <StyledURLWrapper>
          <label>공유 URL</label>
          <StyledCopyWrapper>
            <StyledURL>url 들어갈 곳</StyledURL>
            <Button
              background={theme.color.white}
              color={theme.color.black}
              content="COPY LINK"
            />
          </StyledCopyWrapper>
        </StyledURLWrapper>
      </StyledInWrapper>
    </StyledWrapper>
  );
}

export default LinkShare;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 5rem;
  overflow-x: hidden;
`;

const StyledInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  gap: 50px;
`;

const StyledQuestion = styled.span`
  font-weight: ${theme.fontWeight.medium};
  font-size: 1.5rem;
  letter-spacing: 0.2px;
`;

const StyledImgWrapper = styled.div`
  width: 300px;
`;

const StyledURLWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 100%;

  label {
    font-size: 1.2rem;
  }
`;

const StyledURL = styled.div`
  width: 700px;
  padding: 15px 30px;
  border-radius: 10px;
  border: 0.5px solid ${theme.color.line};
  font-weight: ${theme.fontWeight.bold};

  ${media.mobile} {
    width: 100%;
  }
`;

const StyledCopyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;

  ${media.mobile} {
    flex-direction: column;
  }
`;
