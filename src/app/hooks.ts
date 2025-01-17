import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch; //: () => AppDispatch ...型指定(store.tsで記述)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
