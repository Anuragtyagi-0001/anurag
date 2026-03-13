function ResultSummary({ total, percentage, result }) {
  return (
    <div>
      <h3>Total Marks: {total}</h3>
      <h3>Percentage: {percentage}%</h3>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default ResultSummary;
