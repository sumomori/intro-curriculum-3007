'use strict';

/**
 *17の倍数である場合、真を返す
 * @param {number} 
 */

function isMultipleOfSeventeen(numbers){
    return numbers % 17 === 0;
}

module.exports = {
isMultipleOfSeventeen: isMultipleOfSeventeen
};
