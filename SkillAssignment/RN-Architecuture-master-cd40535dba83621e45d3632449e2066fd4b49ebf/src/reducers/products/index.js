/* eslint-disable module-resolver/use-alias */
import * as Types from '../../constants/actionsTypes';

const INITIAL_STATE = {isLoading: false, responseData: {}};

function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PRODUCT_CATEGORY_LIST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    default:
      return state;
  }
}
export default productReducer;
