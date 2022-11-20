export const calcForecastDays = () => {
  const currentDay = new Date().getDay();
  const WEEK_DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return WEEK_DAYS.slice(currentDay + 1, 7).concat(
    WEEK_DAYS.slice(0, currentDay)
  );
};

export const calcWeeklyDays = (weeklyForecast) => {
  return weeklyForecast.filter(
    (item) => item.dt_txt.split(" ")[1] === "12:00:00"
  );
};

export const calcMinMaxTemp = (weekly) => {
  const days = [];
  if (weekly.length >= 7) {
    for (let i = 0; i < weekly.length / 7 - 1; i++) {
      const arr = weekly.slice(8 * i, 8 * (i + 1));
      days.push(arr);
    }
  }
  if (weekly.length < 7) {
    days.push(weekly);
  }
  const minMax = [];
  for (let i = 0; i < days.length; i++) {
    days[i].sort((a, b) => {
      const tempA = a.main.temp;
      const tempB = b.main.temp;
      if (tempA < tempB) {
        return -1;
      } else {
        return 1;
      }
    });
    minMax.push({
      min: +Number(days[i][0].main.temp).toFixed(2),
      max: +Number(days[i][days[i].length - 1].main.temp).toFixed(2),
    });
  }
  return minMax;
};
