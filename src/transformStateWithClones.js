'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const arr = [];
  let newObj = { ...state };

  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const key in action.extraData) {
        newObj[key] = action.extraData[key];
      }
      arr.push({ ...newObj });
    } else if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete newObj[key];
      }
      arr.push({ ...newObj });
    } else {
      newObj = {};
      arr.push({ ...newObj });
    }
  }

  return arr;
}

module.exports = transformStateWithClones;
