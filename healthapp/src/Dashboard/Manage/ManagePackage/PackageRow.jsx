const PackageRow = ({ data }) => {
  const { title, details, requirements, parameters } = data;
  return (
    <tr>
      <td>{title}</td>
      <td>{details}</td>
      <td>{requirements}</td>
      <td>{parameters}</td>
      {/* <td>
                <button className='delete-btn'>Delete</button>
                <button className='edit-btn'>Edit</button>
            </td> */}
    </tr>
  );
};

export default PackageRow;
