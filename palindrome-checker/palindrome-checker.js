function palindrome(str) {
  str = str.replace(/\s/g, "");
  // str = str.replace(/[^a-zA-Z ]/g, "");
  str = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
  str = str.split('');
  let breakPoint = 0;

  if(str.length%2 == 1){
    breakPoint = (str.length + 1 )/ 2
    console.log('odd', breakPoint);
    
    
    
  }else{
    console.log('even')
    breakPoint = str.length/2
  }
  let strA1 = [];
  let strA2 = [];

  for(let i=0; i<breakPoint; i++){
    strA1.push(str[i]);
    strA2.push(str[str.length -1 - i])


  }
  console.log(strA1)
  console.log(strA2)
  const compareArrays = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};


  return compareArrays(strA1, strA2);
}

palindrome("_0eye");