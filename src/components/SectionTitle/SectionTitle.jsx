import PropTypes from 'prop-types';
import styled from 'styled-components';


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

const Sections = styled.section`

margin: 0 auto;
margin-bottom: 10px;

padding-top: 20px;
padding-bottom: 20px;
`;

const Title = styled.h2`
    font-family: "Raleway";
    margin-bottom: 30px;
    text-transform: uppercase;
    font-size: 20px;

    text-align: center;
    
`;

export default Section;