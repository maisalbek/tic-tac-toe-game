import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";

export const productContext = createContext();

export const useProductContext = () => {
  return useContext(productContext);
};
const API = "http://localhost:8000/item";
const INIT_STATE = {
  item: [],
  ObjForEdit: null,
  pageTotalCount: 1,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        ...state,
        item: action.payload.data,
        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 4),
      };
    case "OBJ_FOR_EDIT":
      return { ObjForEdit: action.payload.data };
    default:
      return state;
  }
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getProducts = async () => {
    try {
      let res = await axios.get(`${API}${window.location.search}`);
      dispatch({
        type: "GET_ITEMS",
        payload: res,
      });
    } catch (err) {}
  };

  const saveAdded = async (obj) => {
    try {
      await axios.post(API, obj);
      getProducts();
    } catch (err) {}
  };
  return (
    <div>
      <productContext.Provider
        value={{ saveAdded, getProducts, item: state.item }}
      >
        {children}
      </productContext.Provider>
    </div>
  );
};

export default ContextProvider;
