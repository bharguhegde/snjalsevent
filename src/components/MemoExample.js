import React, { useState, useMemo } from "react";

const MemoExample = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  // Memoize the addition result
  const additionResult = useMemo(() => {
    console.log('Calculating addition...');
    // Simulate an expensive calculation
    return (number1 + number2) * multiplier;
  }, [number1, number2, multiplier]); // Dependencies

  return (
    <div>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(Number(e.target.value))}
        placeholder="Number 1"
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(Number(e.target.value))}
        placeholder="Number 2"
      />
      <input
        type="number"
        value={multiplier}
        onChange={(e) => setMultiplier(Number(e.target.value))}
        placeholder="Multiplier"
      />
      <p>Result: {additionResult}</p>
    </div>
  );
};

export default MemoExample;
