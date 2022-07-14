import PropTypes from 'prop-types';
import { Sections, Title } from './StyleDSectionTitle';


function Section({ title, children }) {
  return (
    <Sections >
      {title && <Title >{title}</Title>}
      {children}
    </Sections>
  );
}

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};



export default Section;