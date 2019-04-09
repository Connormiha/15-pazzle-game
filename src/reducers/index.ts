import {combineReducers} from 'redux';
import game from 'flux/game';
import field from 'flux/field';

export default combineReducers({
    game,
    field
});
