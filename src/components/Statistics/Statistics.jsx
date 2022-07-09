import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";


function Statistics({good, neutral, bad, total, positivePercentage}) {
    return (
        <List>
            <Item>
                <Text>
                    Good: <span>{good}</span>
                </Text>
            </Item>
            <Item>
                <Text>
                    Neutral: <span>{neutral}</span>
                </Text>
            </Item>
            <Item>
                <Text>
                    Bad: <span>{bad}</span>
                </Text>
            </Item>
            <Item>
                <Text>
                    Total: <span>{total}</span>
                </Text>
            </Item>
            <Item>
                <Text>
                   Positive Feedback: <span>{positivePercentage} </span>
                </Text>
            </Item>
        </List>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage:PropTypes.number.isRequired  
}

const List = styled.ul`
display: flex;
flex-direction: column;

`;
const Item = styled.li`
margin-bottom: 5px;
display: flex;
justify-content: center;
align-items: baseline;

`;
const Text = styled.p`
font-family: "roboto";
font-size: 20px;
font-weight: 500;
color: #212121;
`;
export default Statistics;