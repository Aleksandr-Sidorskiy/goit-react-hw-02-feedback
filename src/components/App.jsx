import React from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./SectionTitle/SectionTitle";
import Notification from "./Notification/Notification";
import styled from 'styled-components';

class App extends React.Component{

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
// ========================================================
  handleClickBtn = e => {
    console.log(this.state)
    const option = e.target.name;

    if (option) {
      this.setState(prevState =>({[option]: prevState[option] +1}))
    }
  }
  // ========================================================
  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
  }
  
  // ========================================================
   countPositiveFeedback = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.ceil((goodFeedback / totalFeedback) * 100);
    }

    return `${result}%`;
  };
  // ========================================================
  
  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedback();
    return (
      <Container>
        <Wrapper>
            <Section title="Please leave feedback">
             <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClickBtn}
          />
          </Section>

        <Section title="Statistics">
          {total > 0 ? (
        <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage ={positivePercentage}
                
            />
          ) : (
              <Notification message="There is no feedback"/>
        )}
          
        </Section>
        </Wrapper>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  `;

const Wrapper = styled.div`

width: 700px;
box-shadow: 0px 0px 10px 2px rgba(0,0,0,.5);
`;
export default App;