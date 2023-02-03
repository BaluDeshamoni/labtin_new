const TestRow = ({ data }) => {
  const { _id, title, details, requirements } = data;
  return (
    <tr>
      <td>{title}</td>
      <td>{details}</td>
      <td>{requirements}</td>
    </tr>
  );
};

export default TestRow;
