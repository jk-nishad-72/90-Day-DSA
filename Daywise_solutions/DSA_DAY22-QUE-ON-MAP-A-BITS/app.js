


//*—Q 69.Sort the people

var sortPeople = function(names, heights) {
    let map = new Map()
     let ans = []
     for(let i = 0;i<names.length;i++){
          map.set(heights[i],names[i])
     }
    heights.sort((a,b)=>b-a)
    for(let j =0;j<heights.length;j++){
        ans.push(map.get(heights[j]))
    }
    return ans 
};