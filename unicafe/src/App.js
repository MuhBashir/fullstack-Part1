import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  console.log(good);
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>give feedback</h2>

      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  if (good || neutral || bad) {
    return (
      <table>
        <thead>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={good + neutral + bad} />
          <StatisticLine
            text='average'
            value={(good - bad) / (good + neutral + bad)}
          />
          <StatisticLine
            text='positive'
            value={(good / (good + neutral + bad)) * 100}
          />
        </thead>
      </table>
    );
  } else {
    return (
      <>
        <p>No feedback given</p>
      </>
    );
  }
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = (props) => {
  const { text, value } = props;
  if (text === 'positive') {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    );
  } else
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    );
};

export default App;
