
/*
*917. Reverse Only Letters
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
  
    const set = new Set();
    for( let i = 0; i < 26; i++ ){
      set.add( String.fromCharCode( 'a'.charCodeAt(0) + i ) );
      set.add( String.fromCharCode( 'A'.charCodeAt(0) + i ) );
    }

    
    
    const arr = s.split('');
    let left = 0;
    let right = arr.length - 1; 
    while( left < right ){
      while( left < right && !set.has( arr[left] ) ){
        left++;
      }
      while( left < right && !set.has( arr[right] ) ){
        right--;
      }
      if( left < right ){
        [ arr[left], arr[right] ] = [ arr[right], arr[left] ];
        left++;
        right--;
      }
    }
    return arr.join('');
  }

  console.log( reverseOnlyLetters("ab-cd") ); // "dc-ba"
  