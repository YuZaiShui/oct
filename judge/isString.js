/**
 * judge a value is the String Type or not;
 * example:
 *  isString("xl")  // true
 *  isString([])    // false
 * **/
const isString =  function (value) {
    const type = typeof value;
    const toString = Object.prototype.toString;
    return type === 'string' || toString.call(value) === '[object String]';
};
export default  isString;
