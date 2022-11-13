import "../../../components/PrescriptionDialog.css";

const PrescriptionRow = ({ name, mobile, img, files }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{mobile}</td>
      <td>
        <div className="prec">
          {img &&
            img.map((d) => (
              <img src={`http://localhost:3000/${d}`} className="prec_img" />
            ))}

          {files &&
            files.map((d) => (
              <img src={`http://localhost:3000/${d}`} className="prec_img" />
            ))}
        </div>
      </td>
    </tr>
  );
};

export default PrescriptionRow;
