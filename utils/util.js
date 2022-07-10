const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  // 今天日期
  let today = formatDate(new Date(year, month, day));
  let weekArr = [];
  for(let i = (today.day - 1); i > 0; i--) {
    weekArr.push(formatDate(new Date(year, month, day-i)))
  }
  for(let j = 0; (+today.day + j) <= 5; j++) {
    weekArr.push(formatDate(new Date(year, month, day+j)))
  }
  return weekArr
}
 
const formatDate = Newdate => {
  let month = Newdate.getMonth() + 1;
  let date = Newdate.getDate();
  let day = Newdate.getDay() ? Newdate.getDay() : 7;

  return {
    date: [month, date].map(formatNumber).join('/'),
    day: formatNumber(day)
  }
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

module.exports = {
  formatTime,
  formatDate
}
