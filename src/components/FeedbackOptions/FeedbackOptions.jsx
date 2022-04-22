import propTypes from 'prop-types';
import { ButtonsContainer, Button } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonsContainer>
      {options.map((option, index) => {
        return (
          <Button
            type="button"
            name={option}
            onClick={onLeaveFeedback}
            key={index}
          >
            {option}
          </Button>
        );
      })}
    </ButtonsContainer>
  );
}

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;
