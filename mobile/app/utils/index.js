import moment from "moment";

const tax = 5000;
const seperateToThounsand = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const dateDifference = (start, end) => {
  start = moment(start);
  end = moment(end);
  const diff = end.diff(start, "days");
  return diff + (diff > 1 || diff < 1 ? " days" : " day");
};

const utils = {
  seperateToThounsand,
  dateDifference,
  tax
};

export default utils;
