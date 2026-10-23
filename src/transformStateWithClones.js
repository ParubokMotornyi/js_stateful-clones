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
  let stateCopy = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const key in action.extraData) {
          stateCopy[key] = action.extraData[key];
        }
        arr.push({ ...stateCopy });
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete stateCopy[key];
        }
        arr.push({ ...stateCopy });
        break;

      case 'clear':
        stateCopy = {};
        arr.push({ ...stateCopy });
        break;

      default:
        break;
    }
  }

  return arr;
}

module.exports = transformStateWithClones;
