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
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    days[i].map((element, index) => {
      if (element.main.temp > max) {
        max = element.main.temp;
      }
      if (element.main.temp < min) {
        min = element.main.temp;
      }
      return element;
    });
    minMax.push({
      min: +Number(min).toFixed(2),
      max: +Number(max).toFixed(2),
    });
  }
  return minMax;
};

export const calcTime = (timeText) => {
  const hours = Number(timeText.split(" ")[1].split(":")[0]);
  if (hours < 12 && hours > 0) {
    if (hours < 10) {
      return `0${hours} AM`;
    }
    return `${hours} AM`;
  } else if (hours === 0) {
    return `${hours} AM`;
  } else if (hours === 12) {
    return `${hours} PM`;
  } else if (hours > 12) {
    if (hours - 12 < 10) {
      return `0${hours - 12} PM`;
    }
    return `${hours - 12} PM`;
  }
};
