let arr1 = [7, 12, 187, 9, 36, 14]
let arr2 = [{item: 'taco', cost: 2.50}, {item: 'burrito', cost: 5.50}, {item: 'chips', cost: 1.50}, {item: 'fries', cost: 4.50}]
const map1 = arr1.map(x => x*2)
console.log(map1)
let costOfFoodOrders = arr2.map(object => object.cost).reduce((previousValue, currentValue) => previousValue + currentValue, 0)
console.log(costOfFoodOrders)
let expensiveItems = arr2.filter(money => money.cost > 3)
console.log(expensiveItems)