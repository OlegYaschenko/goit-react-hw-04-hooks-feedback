import propTypes from 'prop-types';
import { StatisticsList, Item, Text } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsList>
      <Item>
        <Text>Good: {good}</Text>
      </Item>
      <Item>
        <Text>Neutral: {neutral}</Text>
      </Item>
      <Item>
        <Text>Bad: {bad}</Text>
      </Item>
      <Item>
        <Text>Total: {total}</Text>
      </Item>
      <Item>
        <Text>Positive feedback: {positivePercentage}%</Text>
      </Item>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

export default Statistics;
