const scoreArr = [
  {
    name: 'Edward',
    score: 98,
  },
  {
    name: 'Dismus',
    score: 92,
  },
  {
    name: 'Denis',
    score: 90,
  },
];

const tableData = (item) => {
  const tableBD = document.querySelector('#table-body');
  const tableRow = document.createElement('tr');
  const tableTD1 = document.createElement('td');
  const tableTD2 = document.createElement('td');

  tableTD1.innerHTML = item.name;
  tableTD2.innerHTML = item.score;

  tableRow.appendChild(tableTD1);
  tableRow.appendChild(tableTD2);

  tableBD.appendChild(tableRow);
};

const displayScoreArr = () => {
  scoreArr.forEach((item) => {
    tableData(item);
  });
};
export default displayScoreArr();