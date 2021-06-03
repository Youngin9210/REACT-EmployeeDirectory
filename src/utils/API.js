import axios from 'axios';
const BASEURL = 'https://randomuser.me/api/';

export default {
	getUser: () => {
		return axios.get(BASEURL);
	},
};
