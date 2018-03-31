const formatDateToString = (d) => {
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();
  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;
  return [year, month, day].join('-');
};
const getDate =
  str => formatDateToString(
    new Date(parseInt(str, 10) * 1000));


function handle(idx, result) {
  const obj = {
    id: idx,
    identity: `坟第 ${idx.toString()} 号`,
    address: result[1],
    data: result[2],
  };
  const data = obj.data.split(',');
  obj.data = {
    name: data[0],
    start: getDate(data[1]),
    end: getDate(data[2]),
  };
  return obj;
}

export default handle;
