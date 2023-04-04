export const  resolveAfterGiven=(wait) =>{
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, wait);
    });
  }

  export const formatNumber = (num) =>{
    // return num.toLocaleString('en-US');
    return num.toLocaleString(undefined,
      {'minimumFractionDigits':0,'maximumFractionDigits':4}).toString().replace(/\B(?=(\d{4})+(?!\d))/g, ",")
  }