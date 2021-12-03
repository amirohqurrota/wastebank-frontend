// let neww=[]
// const old=[1,2,3,4,5,6]

// neww=old.map(x=>x+1)
// console.log(neww)


const arr1=[1,2,3,4]
const arr2=[3,4,5,6,7,8]
const a=arr1.filter((x => arr2.includes(x)))
console.log(a)
// const intersectionResult = arr1.filter(x => arr2.includes(x))
// console.log(intersectionResult)
// const [listWaste,setListWaste]=useState({})

// arr2.map((x)=>({
//     setListWaste({...listWaste,
//         [x.name]:x.purchase_price
//     }
//     )
// }))

// console.log(listWaste)

// for (const element of listWaste) {
//     setListWaste({...listWaste,
//         [element.name]:element.purchase_price
//     }
//     )
// }