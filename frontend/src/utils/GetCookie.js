export const getCookie = (name) => {
  // console.log("document.cookie:", document.cookie); // Check current cookies
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    const result = parts.pop().split(";").shift();
    // console.log(`Cookie "${name}" found:`, result); // Log the cookie value
    return result;
  }

  // console.log(`Cookie "${name}" not found`);
  return null;
};
