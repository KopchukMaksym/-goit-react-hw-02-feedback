import Section from './Feedback/Section';
import Statistics from './Feedback/Statistics';
import { Component } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Notification from './Feedback/Notification';
import s from './Feedback/feedback.module.css';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state.good;
    const result = (value / total) * 100;
    return Number(result.toFixed(0));
  }

  onLeaveFeedback = propertyName => {
    this.setState(prevState => {
      const value = prevState[propertyName];
      return { [propertyName]: value + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
      <div className={s.block}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
