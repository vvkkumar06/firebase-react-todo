import types  from './../actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case types.FETCH_TODOS:
            return action.payload;
        default:
            return state;
    }
}