function plusMinus(arr = []) {
    let AllLength = arr.length;
    let result = [0, 0, 0];
  
    let zeros = arr.filter((value) => {
      if (value === 0) {
        return true;
      } else {
        return false;
      }
    });
  
    let normal = arr.filter((value) => {
      if (value !== 0 && value.toString()[0] !== "-" ) {
        return true;
      } else {
        return false;
      }
    });
  
    let unnormal = arr.filter(value=>{
      if (value !== 0 && value.toString()[0] === "-" ) {
        return true;
      } else {
        return false;
      }
    })
   result[0] = Number((normal.length / AllLength).toFixed(6));
    result[1] = Number((unnormal.length / AllLength).toFixed(6));
    result[2] = Number((zeros.length / AllLength).toFixed(6));
  
    console.log(result[0])
     console.log(result[1])
      console.log(result[2])
  }
  