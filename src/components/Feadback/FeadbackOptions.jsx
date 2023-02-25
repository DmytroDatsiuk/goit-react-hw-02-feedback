import PropTypes from 'prop-types';
import { Button, ButtonBox } from './Feadback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonBox>
    {options.map(btn => (
      <Button
        key={btn}
        value={btn}
        type="button"
        onClick={e => onLeaveFeedback(e)}
      >
        {btn}
      </Button>
    ))}
  </ButtonBox>
);

FeedbackOptions.prototype = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
