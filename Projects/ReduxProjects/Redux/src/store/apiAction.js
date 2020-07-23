import {createAction} from "@reduxjs/toolkit";

export const API_CALL_BEGAN = createAction("API_CALL_BEGAN");
export const API_CALL_SUCCESS = createAction("API_CALL_SUCCESS");
export const API_CALL_FAILED = createAction("API_CALL_FAILED");
