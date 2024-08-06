module.exports = function check(str, bracketsConfig) {

 let stack = [];

 let brackets_map = new Map();
 for (let i = 0; i < bracketsConfig.length; i++){
  brackets_map.set(bracketsConfig[i][0], bracketsConfig[i][1]);
 }
 
 for (let i = 0; i < str.length; i++){
    const symb = str[i];
    console.log('brackets_map.has(symb): ', brackets_map.has(symb), symb);

    if (stack.length > 0){
      const last_br = stack[stack.length-1];
      if (brackets_map.has(last_br) && brackets_map.get(last_br) == symb){
        stack.pop();
      } else {
        stack.push(symb);}
    } else {
      stack.push(symb);
    }
  }

 return stack.length == 0;
}
