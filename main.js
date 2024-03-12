//1
const twoSum = function(nums,target){
    const mapArray = new Map()
    for (let i = 0;i<nums.length;i++){
        const check = target - nums[i] //7
        // console.log(mapArray,i)
        if(mapArray.has(check)){
            return [mapArray.get(check),i]
        }else{
            mapArray.set(nums[i],i)
        }
    }
    return []
}
console.log(twoSum([2,7,11,15],9))
console.log(twoSum([2,7,11,15],9))
console.log(twoSum([3,2,4],6))
console.log(twoSum([3,3],6))
//2
const addTwoNumbers = function(l1, l2) {
    let memory = 0;
    let result = [];

    for (let i = 0; i < Math.max(l1.length, l2.length); i++) {
        let sum = (l1[i] || 0) + (l2[i] || 0) + memory;
        memory = Math.floor(sum / 10);
        result.push(sum % 10);
    }

    if (memory > 0) {
        result.push(memory);
    }

    return result;
};
console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]))
//3
const maxProfit = function(prices){
    let minBuy=prices[0];
    let maxProfit = 0;
    for (let i = 0 ; i<prices.length; i++){
        minBuy = Math.min(minBuy,prices[i])
        let profit = prices[i]-minBuy;
        maxProfit = Math.max(maxProfit,profit)
    }
    return maxProfit;
}
console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))