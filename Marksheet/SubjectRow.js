function SubjectRow({ data }) {
  return (
    <tr>
      <td>{data.subject}</td>
      <td>{data.marks}</td>
    </tr>
  );
}

export default SubjectRow;
