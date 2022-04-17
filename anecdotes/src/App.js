import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));
  console.log(vote);

  const handleSelection = () => {
    setSelected(() => {
      return Math.floor(Math.random() * anecdotes.length);
    });
  };
  const handleVotes = () => {
    const point = [...vote];
    point[selected] += 1;
    setVote(point);
  };

  const max = () => {
    return Math.max.apply(null, vote);
  };

  const displayMaxIndex = () => {
    return vote.indexOf(Math.max(...vote));
  };

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <button onClick={handleVotes}>vote</button>
      <button onClick={handleSelection}>next anecdotes</button>
      <h1>Anecdotes with most votes</h1>
      <p>{anecdotes[displayMaxIndex()]}</p>
      <p>has {max()} votes</p>
    </div>
  );
};
export default App;