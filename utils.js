const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    timeoutId && clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
