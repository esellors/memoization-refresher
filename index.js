function pirateClosure() {
  let cache = {};

  return function(num) {
    if (cache[num]) return cache[num];

    let arrrrr = [];

    for (let i = 2; i < num; i++) {
      if (Math.floor(num / i) === (num / i)) {
        arrrrr.push(i)
      }
    }
    cache[num] = arrrrr.slice();
    return arrrrr;
  }
}

const pirateInstance = pirateClosure();
console.time('TEST');

// user first comes to page
console.log(pirateInstance(1000000))

// user leaves page and then comes back immediately
console.log(pirateInstance(1000000))

console.timeEnd('TEST')

// 45.323 ms