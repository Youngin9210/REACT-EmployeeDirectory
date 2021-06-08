/* eslint-disable import/no-anonymous-default-export */

// importing axios library to fetch data from an API
import axios from 'axios';
// setting the baseurl of to fetch data from
const BASEURL = 'https://randomuser.me/api/?results=55&nat=us';

export default {
	getUser: () => {
		// returning data retrieved from API
		return axios.get(BASEURL);
	},
};
