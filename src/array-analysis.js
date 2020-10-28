const analyze = (numbers) => {
  const { length } = numbers;
  const sum = numbers.reduce((total, num) => total + num, 0);
  return {
    average: sum / length,
    min: Math.min(...numbers),
    max: Math.max(...numbers),
    length,
  };
};

export default analyze;
