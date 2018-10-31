export const once = () => {
  
}
export const debounce = (func, time, flag) => {
  var timer = null;
  var debounced = function () {
      var _this = this;
      var argu = arguments;
      clearTimeout(timer);
      if(flag) {
          if(!timer) func.apply(_this, argu);
          timer = setTimeout(function () {
              timer = null;
          }, time)
      } else {
          timer = setTimeout(function () {
              func.apply(_this, argu);
          }, time)
      }  
  }
  debounced.cancel = function () {
      clearTimeout(timer);
      timer = null;
  }
  return debounced;
}