import { createStore } from 'redux';
import reducer from './redux/car.combine';

export default createStore(reducer);