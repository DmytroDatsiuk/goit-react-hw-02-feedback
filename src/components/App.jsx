// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AppBox, StatisticTitle } from './App.styled';
import { FeedbackOptions } from './Feadback/FeadbackOptions';
import { GlobalStyle } from './Global.styled';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistic/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const currentBtnValue = e.currentTarget.value;
    this.setState(prevState => ({
      ...prevState,
      [currentBtnValue]: prevState[currentBtnValue] + 1,
    }));
  };

  countTotalFeedback = () => {
    const valuesArr = Object.values(this.state);
    return valuesArr.reduce((acc, val) => {
      acc += val;
      return acc;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.trunc((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    const btnName = Object.keys(this.state);

    return (
      <AppBox>
        <GlobalStyle />
        <Section title="Please leave feadback">
          <FeedbackOptions
            options={btnName}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
          <StatisticTitle>Statistic</StatisticTitle>
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </AppBox>
    );
  }
}
