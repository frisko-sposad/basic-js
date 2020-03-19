module.exports = class DepthCalculator {

    calculateDepth(arr, sublevel = 1, level = 0){
        for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i])) {
            level = this.calculateDepth(arr[i], sublevel + 1, level);
          }
        }
        if (sublevel > level) {
            level = sublevel;
        }
          return level
    }    
};