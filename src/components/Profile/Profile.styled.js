import styled from 'styled-components';

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: ${p => p.theme.colors.background};
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
