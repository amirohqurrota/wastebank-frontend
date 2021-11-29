// let neww=[]
// const old=[1,2,3,4,5,6]

// neww=old.map(x=>x+1)
// console.log(neww)

const arr1=[1,2,3,4]
const arr2=[2,3,4,5,6]
const intersectionResult = arr1.filter(x => arr2.includes(x))
console.log(intersectionResult)