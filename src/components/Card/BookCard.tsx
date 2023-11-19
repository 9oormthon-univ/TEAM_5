import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'styles/theme';

interface Props {
  img: string;
  title: string;
  author: string;
}

function BookCard({ img, title, author }: Props) {
  return (
    <Link to="/roomTest">
      <StyledWrapper>
        <StyledImgWrapper>
          <StyledImg src={img} alt="책 표지" />
        </StyledImgWrapper>
        <StyledContentWrapper>
          <StyledTitle>{title}</StyledTitle>
          <StyledAuthor>{author}</StyledAuthor>
        </StyledContentWrapper>
      </StyledWrapper>
    </Link>
  );
}

export default BookCard;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImgWrapper = styled.div`
  width: 200px;
`;

const StyledImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.6rem;
  gap: 2px;
  width: 16rem;
`;

const StyledTitle = styled.span`
  font-size: 1.2rem;
  font-weight: ${theme.fontWeight.bold};
`;

const StyledAuthor = styled.p`
  margin-top: 5px;
  font-weight: ${theme.fontWeight.light};
`;
