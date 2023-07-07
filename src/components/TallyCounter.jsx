import React, { useState } from 'react';

const CounterApp = () => {
  const [counters, setCounters] = useState([]);
  const [counterName, setCounterName] = useState('');
  const [startValue, setStartValue] = useState(0);

  const handleIncrement = (index) => {
    setCounters((prevState) => {
      const updatedCounters = [...prevState];
      updatedCounters[index].value += 1;
      return updatedCounters;
    });
  };

  const handleDecrement = (index) => {
    setCounters((prevState) => {
      const updatedCounters = [...prevState];
      if (updatedCounters[index].value > 0) {
        updatedCounters[index].value -= 1;
      }
      return updatedCounters;
    });
  };

  const handleReset = (index) => {
    setCounters((prevState) => {
      const updatedCounters = [...prevState];
      updatedCounters[index].value = 0;
      return updatedCounters;
    });
  };

  const handleCounterNameChange = (index, event) => {
    const { value } = event.target;
    setCounters((prevState) => {
      const updatedCounters = [...prevState];
      updatedCounters[index].name = value;
      return updatedCounters;
    });
  };

  const handleAddCounter = () => {
    setCounters((prevState) => [
      ...prevState,
      { name: counterName, value: startValue }
    ]);
    setCounterName('');
  };

  const handleRemoveCounter = (index) => {
    setCounters((prevState) => {
      const updatedCounters = [...prevState];
      updatedCounters.splice(index, 1);
      return updatedCounters;
    });
  };

  return (
    <div className="container">
      <h1>Counting Web Application</h1>
      <div className="counters">
        {counters.map((counter, index) => (
          <div className="counter" key={index}>
            <div className="counter-info">
                <table>
                    <tr>
                        <td><label>Counter Name:</label></td>
                        <td>              <input
                type="text"
                value={counter.name}
                onChange={(event) => handleCounterNameChange(index, event)}
              /></td>
                    </tr>
                    <tr>
                        <td><label>Start Value:</label></td>
                        <td><input
                type="number"
                value={counter.value}
                readOnly
              /></td>
                    </tr>
                </table>
            </div>
            <div className="counter-buttons">
              <button onClick={() => handleIncrement(index)}>+</button>
              <button onClick={() => handleDecrement(index)}>-</button>
              <button onClick={() => handleReset(index)}>Reset</button>
              <button onClick={() => handleRemoveCounter(index)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="add-counter">
        <input
          type="text"
          value={counterName}
          onChange={(event) => setCounterName(event.target.value)}
          placeholder="Enter counter name"
        />
        <input
          type="number"
          value={startValue}
          onChange={(event) => setStartValue(parseInt(event.target.value))}
          placeholder="Start value"
        />
        <button onClick={handleAddCounter}>Add Counter</button>
      </div>
    </div>
  );
};

export default CounterApp;
