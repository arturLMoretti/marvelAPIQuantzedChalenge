import md5 from 'md5';
import axios from 'axios';

export const publicKey = 'fbf2a60cf4cbf094dc433ca4037b89b9';
const privateKey = 'a0a8dd22cebe51b138111118e7a10cd66b66297a';

const timeStamp = Number(new Date());

const hash = md5(timeStamp + privateKey + publicKey);

export const apiRequest = (requisitonType) => axios.get(`https://gateway.marvel.com/v1/public/${requisitonType}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`);
