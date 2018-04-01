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
    identity: `No. ${idx.toString()}`,
    address: result[1],
    data: result[2],
  };
  const data = obj.data.split(',');
  if (data[0] === '') {
    data[0] = 'John Doe';
  }
  obj.data = {
    name: data[0],
    start: getDate(data[1]),
    end: getDate(data[2]),
  };
  return obj;
}

export default handle;
