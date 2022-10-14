import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import customerReducer from "../reducer/customerReducer";
import employeeReducer from "../reducer/employeeReducer";
import {
  discountReducer,
  locationReducer,
  packageReducer,
} from "../reducer/packageReducer";
import prescriptionReducer from "../reducer/prescriptionReducer";
import {
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
} from "../reducer/userReducer";
import testReducer from "../reducer/testReducer";
import radTestReducer from "../reducer/radTestReducer";
import { labReducer, radLabReducer } from "../reducer/labReducer";
import { bannerReducer, scrollmenuReducer } from "../reducer/appreanceReducer";
import orderReducer from "../reducer/orderReducer";

const reducer = combineReducers({
  customers: customerReducer,
  employees: employeeReducer,
  packages: packageReducer,
  tests: testReducer,
  radTests: radTestReducer,
  labList: labReducer,
  radLabList: radLabReducer,
  discounts: discountReducer,
  locations: locationReducer,
  banners: bannerReducer,
  scrollmenus: scrollmenuReducer,
  prescriptions: prescriptionReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
  userDetails: userDetailsReducer,
  orders: orderReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
