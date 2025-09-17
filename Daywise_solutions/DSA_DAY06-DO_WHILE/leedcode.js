


var functions = [x => x + 1, x => x * x, x => 2 * x]

var compose = function(functions) {
    // let data =0;
    // return function(x) {
    //   for(let i = functions.length-1;i>=0;i--){
    //       data  =(functions[i](x))
    //     x = data
    //   }
    //   return data
    // }


  return function(x) {
    if(functions.length===0) return x
    return functions.reduceRight((acc, fn) => fn(acc), x);
  
};

};

console.log(compose(functions)(4));


