import styled from 'styled-components';

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.background};
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
