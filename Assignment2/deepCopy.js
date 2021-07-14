const obj = {
	b: 10,
	c: {
		d: {
			e: 20
		}
	}
};

function deepCopyItem(obj) {
  if (typeof(obj) !== 'object') return obj;

  let cloneObj = {};
  for (key in obj) {
    if (typeof(obj[key]) === 'object') cloneObj[key] = deepCopyItem(obj[key]);
    else cloneObj[key] = obj[key];
  }

  return cloneObj;
}

const objCopy =  deepCopyItem(obj); // write a function to do deep copy
obj.c.d.e = 30;
console.log(obj.c.d.e); // 30
console.log(objCopy.c.d.e); // 20
