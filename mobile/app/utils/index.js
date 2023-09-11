import moment from "moment";

const tax = 5000;

// PLURALIZE
const pluralize = (value, word) => {
  let parseValue = JSON.parse(value);
  if (parseValue > 1 || parseValue === 0) {
    return `${word}s`;
  } else {
    return `${word}`;
  }
};

// THOUSAND SEPARATOR
const separateToThounsand = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// GET THE DAYS DIFFERENCE BETWEEN DATES
const dateDifference = (start, end) => {
  start = moment(start);
  end = moment(end);
  const diff = end.diff(start, "days");
  return diff + (diff > 1 || diff < 1 ? " days" : " day");
};

// SCREEN NAVIGATOR
const privateNavigator = (navigation, user) => {
  if (user) {
    navigation;
  } else {
  }

  return <></>;
};

const utils = {
  tax,
  pluralize,
  dateDifference,
  privateNavigator,
  separateToThounsand,
};

export default utils;
