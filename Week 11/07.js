//内联样式 > ID 选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 标签选择器 = 伪元素选择器
function calcultePriority(arr,num){
    const reverseArr = arr.reverse();
    return reverseArr.reduce((prev,cur,curIndex)=>{
        return prev + cur * num ** curIndex; 
    })
}
console.log("div#a.b .c[id=x]", calcultePriority([0,1,3,1],65536)); //4295163905
console.log("#a:not(#b)",calcultePriority([0,2,0,0],65536)); // 8589934592
console.log("*.a", calcultePriority([0,0,1,0],65536)); // 65536
console.log("div.a", calcultePriority([0,0,1,1],65536)); // 65537