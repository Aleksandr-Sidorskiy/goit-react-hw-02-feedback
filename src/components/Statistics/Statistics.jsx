import React from "react";
import PropTypes from 'prop-types';
import { List, Item, Text } from './StyleStatistics';


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
    positivePercentage:PropTypes.string.isRequired  
}


export default Statistics;