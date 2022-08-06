import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  gap: 20px;
  border: 1px solid black;
  background-color: aqua;
`;

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${({ isOnline }) => {
    return isOnline ? 'green' : 'red';
  }};
`;
