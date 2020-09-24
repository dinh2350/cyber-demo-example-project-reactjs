import { combineReducers } from "redux";
import BaiTapGameXucXacReducer from "./BaiTapXucXacReducer";
import userReducer from "./userReducer";
//rootReducer quản lý state của toàn ứng dụng
const rootReducer = combineReducers({
  //Nơi khai báo các state (reducer) theo từng nghiệp vụ
  //GioHangReducer chứa stateGioHang
  BaiTapGameXucXacReducer,
  user: userReducer,
});

export default rootReducer;
