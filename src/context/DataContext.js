import { createContext, useReducer, useCallback } from "react";

export const DataContext = createContext();

const dataReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return { ...state, data: action.payload };
    case "UPDATE_CITY":
      return { ...state, city: action.payload };
    case "UPDATE_ISLOADING":
      return { ...state, isLoading: action.payload };
    case "UPDATE_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, {
    data: "",
    city: "",
    isLoading: false,
    error: false,
  });

  const updateData = useCallback((data) => {
    dispatch({ type: "UPDATE_DATA", payload: data });
  }, []);

  const updateCity = useCallback((city) => {
    dispatch({ type: "UPDATE_CITY", payload: city });
  }, []);

  const updateIsloading = useCallback((status) => {
    dispatch({ type: "UPDATE_ISLOADING", payload: status });
  }, []);

  const updateError = useCallback((error) => {
    dispatch({ type: "UPDATE_ERROR", payload: error });
  }, []);

  return (
    <DataContext.Provider
      value={{
        ...state,
        updateData,
        updateCity,
        updateIsloading,
        updateError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
