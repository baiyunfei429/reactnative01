import homeReducer from './home';
import popularizeReducer from './popularize';
import mineReducer from './mine';

const combineReducers = () => {
  return {
    home: homeReducer,
    popularize: popularizeReducer,
    mine: mineReducer
  }
}

export default combineReducers