import axios from "axios";
import * as ApiActions from "../actions/apiAction";

const api = ({dispatch}) => (next) => async (action) => {
  if (action.type !== ApiActions.API_CALL_BEGAN.type) {
    return next(action);
  }

  next(action);

  const {url, method, data, onSuccess, onError} = action.payload;

  try {
    const response = await axios.request({
      baseURL: "http://localhost:9001/api",
      url,
      method,
      data,
    });

    dispatch(ApiActions.API_CALL_SUCCESS(response.data));

    if (onSuccess)
      dispatch({type: onSuccess, payload: response.data});
  } catch (error) {
    //General Error
    dispatch(ApiActions.API_CALL_FAILED(error));

    if (onError) dispatch({type: onError, payload: error});
  }
};

export default api;
