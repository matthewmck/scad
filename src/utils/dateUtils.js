function monthsFromToday(num) {
  const date = new Date(Date.now());
  const day = date.getDate();
  const month = date.getMonth() - num;
  const year = date.getFullYear();

  return new Date(year, month, day);
}

export function nineMonthsPassed(date) {
  const opened = formatDate(date);
  const nineMonthsFromToday = monthsFromToday(9);

  if (opened.getTime() < nineMonthsFromToday.getTime()) {
    return true;
  } else {
    return false;
  }
}

function formatDate(date) {
  const arr = date.split("-");
  return new Date(arr[0], arr[1] - 1, arr[2]);
}
