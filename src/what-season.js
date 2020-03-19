module.exports = function getSeason(date) {
  
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  };
  
  if (!(Object.prototype.toString.call(date) === '[object Date]'))  {
    throw new Error();
  }  
  

  let res = date.getMonth();
  
  
 
  if (res < 2 || res > 10) {
    return "winter";
  } 
  else if (res  <= 4) {
    return "spring";
  }
  else if (res  <= 7) {
    return "summer";
  }
  else if (res <= 10) {
    return "autumn";
  }
  else {
  return false;
}





};
