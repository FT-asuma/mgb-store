import {configureStore, combineReducers} from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper';
import globalSettingsReducer from "@/redux/globalSettingsReducer";

const rootReducer = combineReducers({
    global_settings: globalSettingsReducer,
    //другие редюсеры добавлять сюда.
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
export const wrapper = createWrapper(configureStore);
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>

export type AppDispatch = AppStore['dispatch']