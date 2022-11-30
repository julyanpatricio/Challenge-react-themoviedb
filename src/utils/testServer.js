import { render } from '@testing-library/react';
import App from '../App';
import React from 'react';
import '../index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "../store/index";
import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export const Render = (child) => render(<React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      {child}
    </BrowserRouter>
  </Provider>
</React.StrictMode>);