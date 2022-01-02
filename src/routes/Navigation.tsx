import { BrowserRouter, Navigate, Routes, Route, NavLink } from 'react-router-dom';
import { FormikBasicPage, RegisterPage, FormikYupPage, FormikComponents,
  FormikAbstractation, RegisterFormikPage, DynamicForm 
} from '../03-forms/pages';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" className={({isActive})=> isActive ? 'nav-active' : '' } >Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/register-formik" className={({isActive})=> isActive ? 'nav-active' : '' } >Register Formik Page</NavLink>
            </li>
            <li>
              <NavLink to="/Formik-basic" className={({isActive})=> isActive ? 'nav-active' : '' } >Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={({isActive})=> isActive ? 'nav-active' : '' } >Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={({isActive})=> isActive ? 'nav-active' : '' } >Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstractation" className={({isActive})=> isActive ? 'nav-active' : '' } >Formik Abstractation</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" className={({isActive})=> isActive ? 'nav-active' : '' } >Dynamic Form</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register-formik" element={<RegisterFormikPage />} />
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/formik-components" element={<FormikComponents />} />
          <Route path="/formik-abstractation" element={<FormikAbstractation />} />
          <Route path="/dynamic-form" element={<DynamicForm />} />
          <Route path="/*" element={<Navigate to="/register" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}