export const  resolveAfterGiven=(wait) =>{
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, wait);
    });
  }

  export const formatNumber = (num) =>{
    const options = { 
      minimumFractionDigits: 0,
      maximumFractionDigits: 4 
    };
    return Number(num).toLocaleString('en', options);
  }