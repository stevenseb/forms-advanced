import { NavLink, Outlet } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="sample-survey">Sample Survey</NavLink>
        <NavLink to="sensory-preferences">Sensory Preferences</NavLink>
        <NavLink to="report">Report</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default Navigation;
