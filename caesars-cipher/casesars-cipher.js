function rot13(str) {

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    // console.log(alphabet);
    let newStr = '';
    for(let i in str){
      if(alphabet.includes(str[i])){
        let index = alphabet.findIndex( item => item === str[i]);
        console.log(str[i])
        // console.log('this is final index',alphabet.length - (index - 13))
        if(index - 13 < 0){
          index = alphabet.length + (index - 13);
          console.log(alphabet[index])
          newStr += alphabet[index];
          
        }else{
          newStr += alphabet[index - 13]
        }
        
      }
      else{
        newStr += str[i]
      }
    }
    console.log(newStr)
    return newStr;
  }
  
  rot13("SERR PBQR PNZC");