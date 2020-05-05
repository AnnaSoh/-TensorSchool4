//ДЗ 4

// 1. Создать массив arr1 из 100 элементов и заполнить его числами от 1 до 100 в случайном порядке. Каждое число должно встречаться в массиве ровно один раз.
let arr1 = [];
let N = 100;
let rundomN;
while (arr1.length <= N-1 ) {
  rundomN = Math.floor(Math.random() * N + 1);
  if  ( arr1.indexOf(rundomN) === -1) {
    arr1.push(rundomN);
  }
}
console.log('arr1:', arr1);

let arr = arr1.slice();

/* 2. Создать массив arr2, который формируется из массива arr1 следующим образом:
* первым элементом нового массива становится последний элемент массива arr1, вторым элементом - предпоследний, и т.д.
*/
let arr2 = arr1.reverse();
console.log('arr2:', arr2);


//3. Создать третий  массив arr3, который формируется как разность соответствующих элементов массива arr1 и arr2.
let arr3 = arr.map(function(val, ind) {
  return val - arr2[ind];
});
console.log('arr3:', arr3);

//4. Для третьего массива посчитать среднее арифметическое значение всех элементов.
let sum = 0;
arr3.forEach(function(n) {
  sum += n;
})
console.log(sum / arr3.length)
