import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:s      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
export default function calculate(obj, buttonName) {
  console.log('runing Calculate(', obj, buttonName, ')');

  let result;
  if (buttonName === 'AC') {
    result = {
      total: null,
      next: null,
      operation: null,
    };
    console.log('calculate will return ----->', result);
    return result;
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      result = {};
      console.log('calculate will return ----->', result);
      return result;
    }
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next && obj.next !== '0') {
        result = { ...obj, next: obj.next + buttonName };
        console.log('calculate will return ----->', result);
        return result;
      }
      result = { ...obj, next: buttonName };
      console.log('calculate will return ----->', result);
      return result;
    }
    // If there is no operation, update next and clear the value
    if (obj.next && obj.next !== '0') {
      result = {
        next: obj.next + buttonName,
        total: null,
      };
      console.log('calculate will return ----->', result);
      return result;
    }
    result = {
      next: buttonName,
      total: null,
    };
    console.log('calculate will return ----->', result);
    return result;
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        result = { ...obj };
        console.log('calculate will return ----->', result);
        return result;
      }
      result = { ...obj, next: `${obj.next}.` };
      console.log('calculate will return ----->', result);
      return result;
    }
    if (obj.operation) {
      result = { ...obj, next: '0.' };
      console.log('calculate will return ----->', result);
      return result;
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        result = {};
        console.log('calculate will return ----->', result);
        return result;
      }
      result = { ...obj, next: `${obj.total}.` };
      console.log('calculate will return ----->', result);
      return result;
    }
    result = { ...obj, next: '0.' };
    console.log('calculate will return ----->', result);
    return result;
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      result = {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
      console.log('calculate will return ----->', result);
      return result;
    }
    // '=' with no operation, nothing to do
    result = {};
    console.log('calculate will return ----->', result);
    return result;
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      result = { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
      console.log('calculate will return ----->', result);
      return result;
    }
    if (obj.total) {
      result = { ...obj, total: (-1 * parseFloat(obj.total)).toString() };
      console.log('calculate will return ----->', result);
      return result;
    }
    result = {};
    console.log('calculate will return ----->', result);
    return result;
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!obj.next && !obj.total) {
  //   return {};
  // }

  // User pressed an operation after pressing '='
  if (!obj.next && obj.total && !obj.operation) {
    result = { ...obj, operation: buttonName };
    console.log('calculate will return ----->', result);
    return result;
  }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    if (obj.total && !obj.next) {
      result = { ...obj, operation: buttonName };
      console.log('calculate will return ----->', result);
      return result;
    }

    if (!obj.total) {
      result = { total: 0, operation: buttonName };
      console.log('calculate will return ----->', result);
      return result;
    }

    result = {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
    console.log('calculate will return ----->', result);
    return result;
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!obj.next) {
    result = { operation: buttonName };
    console.log('calculate will return ----->', result);
    return result;
  }

  // save the operation and shift 'next' into 'total'
  result = {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
  console.log('result from Calculate', result);
  return result;
}
