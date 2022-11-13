import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchPackages = () => API.get("/package");
export const createPackage = (newPost) => API.post("/package", newPost);

export const fetchTests = () => API.get("/test");
export const createTest = (newTest) => API.post("/test", newTest);

export const editTest = (newTest) => API.put("/test", newTest);
export const editPackage = (newPackage) => API.put("/package", newPackage);

export const fetchRadTests = () => API.get("/radTest");
export const createRadTest = (newRadTest) => API.post("/radTest", newRadTest);

export const fetchLabs = () => API.get("/lab");
export const createLab = (newLab) => API.post("/lab", newLab);

export const fetchRadLabs = () => API.get("/lab/radLab");
export const createRadLab = (newRadLab) => API.post("/lab/radLab", newRadLab);

export const fetchDiscounts = () => API.get("/package/discount");
export const createDiscount = (newDiscount) =>
  API.post("/package/discount", newDiscount);

export const fetchLocations = () => API.get("/package/location");
export const createLocation = (newLocation) =>
  API.post("/package/location", newLocation);

export const fetchBanners = () => API.get("/appearance/banner");
export const createBanner = (newBanner) =>
  API.post("/appearance/banner", newBanner);

export const fetchScrollmenus = () => API.get("/appearance/scrollmenu");
export const createScrollmenu = (newScrollmenu) =>
  API.post("/appearance/scrollmenu", newScrollmenu);
export const editScrollMenu = (newScrollmenu) =>
  API.put("/appearance/scrollmenu", newScrollmenu);

export const fetchPrescriptions = () => API.get("/prescriptions");
export const addPrescription = (newPrescription) =>
  API.post("/prescriptions", newPrescription);

export const createOrder = (order, config) => API.post("/order", order, config);
export const fetchOrders = (config) => API.get("/order/all", config);
export const fetchMyOrders = (config) => API.get("/order", config);
export const uploadReports = (data, config) =>
  API.put("/order/uploadReports", data, config);
export const changeStatus = (data, config) =>
  API.put("/order/changeStatus", data, config);

export const addHighlightPackage = (data) =>
  API.put("/package/highlight", data);
export const addHighlightTest = (data) => API.put("/test/highlight", data);
