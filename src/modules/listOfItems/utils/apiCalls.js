import axios from 'axios';
import { GET_LIST } from '../constants/httpUrls';

export const fetchItems = () => axios.get(GET_LIST);
