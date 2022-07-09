import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <List>
        {options.map(option => (
            <Item  key={option}>
                <Button theme={theme}
                    type="button"
                    name={option}
                    onClick={onLeaveFeedback}
                >
                {option}
            </Button>
            </Item>
      ))}
            
        </List>
    )
}

FeedbackOptions.propTypes = {
     options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback:PropTypes.func.isRequired,
}
const List = styled.ul`
display: flex;
justify-content: center;
`;

const Item = styled.li`
margin-left: 10px;
`;

const Button = styled.button`
padding: 10px 20px;
border-radius: 5px;
background-color: ${props => props.theme.good};
color: #fff;
&:hover{
    cursor: pointer;
    transform: scale(1.15);
}

`;

const theme = {
    good: "green",
    neutral: "yellow",
    bad:"red"
}



export default FeedbackOptions;

