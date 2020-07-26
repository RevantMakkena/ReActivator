import axios from "axios";
import * as ApiActions from "../actions/ApiActions";

const api = ({dispatch}) => (next) => async (action) => {
  if (action === undefined) return;
  if (action.type !== ApiActions.API_CALL_BEGAN.type) {
    return next(action);
  }

  const {
    url,
    method,
    data,
    onStart,
    onSuccess,
    onError,
  } = action.payload;

  if (onStart) dispatch({type: onStart});
  next(action);

  try {
    const response = await axios.request({
      url,
      method,
      data,
    });

    dispatch(ApiActions.API_CALL_SUCCESS(response.data));

    if (onSuccess)
      dispatch({type: onSuccess, payload: response.data});
  } catch (error) {
    //General Error
    dispatch(ApiActions.API_CALL_FAILED(error.message));

    if (onError) dispatch({type: onError, payload: error.message});
  }
};

export default api;
