const HighlightTestRow = ({ singlePackage }) => {
  const { _id, title, details, parameters, originalPrice, discountPrice } =
    singlePackage;
  return (
    <tr>
      <td>{title}</td>
      <td>{details}</td>
      <td>{parameters}</td>
      <td>{originalPrice}</td>
      <td>{discountPrice}</td>
      {/* <td>
        <button className="delete-btn">Remove</button>
      </td> */}
    </tr>
  );
};

export default HighlightTestRow;
