import axios from 'axios';
import { API_URL } from '../constants/apiConstants';

export default axios.create({
	baseURL: API_URL,
});
