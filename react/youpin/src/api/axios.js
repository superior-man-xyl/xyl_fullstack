import axios from 'axios';
import qs from 'qs';
//axios配置文件
axios.defaults.baseURL = "http://127.0.0.1:3002";
axios.defaults.timeout = 10000;//10秒
axios.defaults.withCredentials = true;
//某种请求的时候，headers?  请求 分为请求头，请求体
//Content-Type 内容类型
// ？ 发送给服务器  使其能知道怎么处理这些请求体  application/x-www-form-urlencoded是默认的头部值
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';//全局添加
// axios.defaults.transformRequest = data => qs.stringify(data);
/* 
axios.interceptors.request.use(config => {
	let token = localStorage.getItem('token');
	token && (config.headers.Authorization = token);
	return config;
}, error => {
	return Promise.reject(error);
}); 
axios.defaults.validateStatus = status => {
	return /^(2|3)\d{2}$/.test(status);
};
*/
axios.interceptors.response.use(response => {
	return response.data;
}, error => {
	if (error.response) {
		switch (error.response.status) {
			case 401:
				break;
			case 403:
				break;
			case 404:
				break;
		}
	} else {
		if (!window.navigator.onLine) {
			return;
		}
		return Promise.reject(error);
	} 
});
export default axios;
