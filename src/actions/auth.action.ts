import { ThunkDispatch } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import { LoginUser } from "../services/auth"
import { loginFailed, setUser } from "./action"

export const login = (data: any) => async  (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
        const res = await LoginUser(data);
        dispatch(setUser(res.data.user, res.data.token));
        return await Promise.resolve();
    } catch (err: any) {
        dispatch(loginFailed(err.message));
    }
}