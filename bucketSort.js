/*
桶排序
1）算法简介
桶排序 (Bucket sort)的工作的原理：假设输入数据服从均匀分布，
将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排序）。
2）算法描述和实现
具体算法描述如下：
1-设置一个定量的数组当作空桶；
2-遍历输入数据，并且把数据一个一个放到对应的桶里去；
3-对每个不是空的桶进行排序；
4-从不是空的桶里把排好序的数据拼接起来。
3）算法分析
桶排序最好情况下使用线性时间O(n)，桶排序的时间复杂度，
取决与对各个桶之间数据进行排序的时间复杂度，因为其它部分的时间复杂度都为O(n)。
很显然，桶划分的越小，各个桶之间的数据越少，排序所用的时间也会越少。但相应的空间消耗就会增大。
*/
/*方法说明：桶排序
@param  array 数组
@param  num   桶的数量*/
function bucketSort(array, num) {
  if (array.length <= 1) {
      return array;
  }
  var len = array.length, buckets = [], result = [], min = max = array[0], regex = '/^[1-9]+[0-9]*$/', space, n = 0;
  num = num || ((num > 1 && regex.test(num)) ? num : 10);
  for (var i = 1; i < len; i++) {
      min = min <= array[i] ? min : array[i];
      max = max >= array[i] ? max : array[i];
  }
  space = (max - min + 1) / num;
  for (var j = 0; j < len; j++) {
      var index = Math.floor((array[j] - min) / space);
      if (buckets[index]) {  
//  非空桶，插入排序
          var k = buckets[index].length - 1;
          while (k >= 0 && buckets[index][k] > array[j]) {
              buckets[index][k + 1] = buckets[index][k];
              k--;
          }
          buckets[index][k + 1] = array[j];
      } else {    
//空桶，初始化
          buckets[index] = [];
          buckets[index].push(array[j]);
      }
  }
  while (n < num) {
      result = result.concat(buckets[n]);
      n++;
  }
  return result;
}
