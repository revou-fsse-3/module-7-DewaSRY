import Cookies from "js-cookie";

const CookiesName = "auth";

const getCookies = () => {
  return Cookies.get(CookiesName);
};

const setCookies = (auth) => {
  console.log(auth);
  Cookies.set(CookiesName, auth, { expires: 7 }); // which 7 days
};
export { getCookies, setCookies };
