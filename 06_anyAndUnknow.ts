export{}
//不推荐使用any,它会绕过类型校验
let a:any = 1
// a = 'str'
a.toFixed(2)

let n:unknown
n = 1
// n.toFixed(2) 〇 

if(typeof n === 'number'){
  n.toFixed(2)
}else if(typeof n === 'string'){
  n.concat()  
}