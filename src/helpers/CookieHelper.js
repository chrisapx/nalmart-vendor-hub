import Cookies from 'js-cookie';

export const setObjectCookie = (name, object, options) => {
  Cookies.set(name, JSON.stringify(object), options);
};

export const getObjectCookie = (name) => {
  const cookieValue = Cookies.get(name);
  return cookieValue ? JSON.parse(cookieValue) : null;
};