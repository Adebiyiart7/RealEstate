const seperateToThounsand = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const utils = {
  seperateToThounsand
};

export default utils;