import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { StatList } from './Statistics.styled';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const Statistics = ({ title = null, stats }) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    width="300px"
    backgroundColor="lightgrey"
    mx="auto"
    my="0"
    p={3}
    as="section"
  >
    {title && <h2>{title}</h2>}

    <StatList>
      {stats.map(({ id, label, percentage }) => (
        <Box
          key={id}
          display="flex"
          flexDirection="column"
          alignItems="center"
          backgroundColor={getRandomHexColor()}
          p={3}
          gridGap="10px"
          as="li"
        >
          <span>{label}</span>
          <span>{percentage}</span>
        </Box>
      ))}
    </StatList>
  </Box>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
