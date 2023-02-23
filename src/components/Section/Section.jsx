import PropTypes from 'prop-types';
import { Secti, Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <Secti>
    <Title>{title}</Title>
    {children}
  </Secti>
);

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
