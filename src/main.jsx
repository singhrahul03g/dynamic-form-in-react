import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import DisplayData from './pages/DisplayData.jsx'
import DisplayWindowWidth from './pages/DisplayWindowWidth.jsx'
import DynamicForm from './pages/DynamicForm.jsx'
import { formFields } from './utils/formFields.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <DisplayData/>,
  },
  {
    path: "display-window-width",
    element: <DisplayWindowWidth/>,
  },
  {
    path: "/dynamic-form",
    element:  <DynamicForm formFields={formFields}/>
    ,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
