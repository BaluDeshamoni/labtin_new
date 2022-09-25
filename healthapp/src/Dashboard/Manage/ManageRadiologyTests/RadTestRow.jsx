const RadTestRow = ({ data }) => {
  const { _id, title, details, parameters, originalPrice, discountPrice } =
    data;
  return (
    <tr>
      <td>{title}</td>
      <td>{details}</td>
      <td>{parameters}</td>
      <td>{originalPrice}</td>
      <td>{discountPrice}</td>
      {/* <td>
        <button className='delete-btn'>Delete</button>
        <button className='edit-btn'>Edit</button>
      </td> */}
    </tr>
  );
};

export default RadTestRow;
