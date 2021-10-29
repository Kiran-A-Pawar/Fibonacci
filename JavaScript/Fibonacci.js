
function getRoundedValue(alpha) {
    let firstNum = 101;
    let secondNum = 102;
    let arr = [firstNum,secondNum]
    
    for(let i = 0; i<24 ; i++){
      let temp = firstNum+ secondNum;
      firstNum = secondNum;
      secondNum= temp;
      arr.push(temp)
      
    }
    const fibArr = arr.map((ele,i) =>{
      let newObj = {};
      newObj[String.fromCharCode(i+65)] = ele;
      return newObj;
    });
    const filterArr = fibArr.filter((ele,i) => ele[alpha]);
     console.log(fibArr)
    return Math.round(Object.values(filterArr[0])[0]/10)*10
  
  }
  console.log(getRoundedValue("J"));