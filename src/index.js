 module.exports = 
function check(str, bracketsConfig) {
  let config = new Map(bracketsConfig);
  let result = str.split("");
  for (let i=0;i<result.length;i++) {
    if (config.get(result[i])) {

      if (result[i+1]==config.get(result[i])) {
        result.splice(i,2)
        i-=2
      }
    }
  }
  return result.length==0 ?  true : false;
}
