export const getErrorMessageByStatus = (code) => {
  let response = "";

  switch (code) {
    case 500:
      response = "Internal Server Error";
      break;
    case 403:
      response = "Please check the submitted data";
      break;
    case 404:
      response = "User not found";
      break;
    default:
      break;
  }
  return response;
};
