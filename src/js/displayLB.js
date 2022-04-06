const tableData = (user, score) => {
  const tableBD = document.querySelector('#table-body');
  const tableRow = document.createElement('tr');
  const tableTD1 = document.createElement('td');
  const tableTD2 = document.createElement('td');

    tableTD1.innerHTML = `${user}`;
    tableTD2.innerHTML = `${score}`;

  tableRow.appendChild(tableTD1);
  tableRow.appendChild(tableTD2);

  tableBD.appendChild(tableRow);
};
export default tableData;