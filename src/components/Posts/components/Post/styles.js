import styled from "styled-components";

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-between;
  flex: 1 1;
  min-width: 300px;
  background-color:	#F5F5F5;
`;

export const Image = styled.img`
  max-width: 200px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
