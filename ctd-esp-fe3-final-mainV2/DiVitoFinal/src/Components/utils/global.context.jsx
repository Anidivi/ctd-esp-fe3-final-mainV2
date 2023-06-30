import React, { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import '../../style.css'

export const initialState = { theme: 'light', dentistas: [] };

export const ActionType = {
  CHANGE_THEME: 'CHANGE_THEME',
  SET_DATA: 'SET_DATA',
};

export const ContextGlobal = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.CHANGE_THEME:
      return { ...state, theme: action.payload };
    case ActionType.SET_DATA:
      return { ...state, dentistas: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeTheme = (theme) => {
    dispatch({ type: ActionType.CHANGE_THEME, payload: theme });
  };

  const setData = (data) => {
    dispatch({ type: ActionType.SET_DATA, payload: data });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, changeTheme, setData }}>
      {children}
    </ContextGlobal.Provider>
  );
};