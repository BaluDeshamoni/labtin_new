const HighlightTestRow = ({ singlePackage }) => {
  const { _id, title, details } = singlePackage;
  return (
    <tr>
      <td>{title}</td>
      <td>{details}</td>
      {/* <td>
        <button className="delete-btn">Remove</button>
      </td> */}
    </tr>
  );
};

export default HighlightTestRow;
