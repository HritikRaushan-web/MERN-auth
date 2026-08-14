import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, LayoutDashboard, Shield } from 'lucide-react';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully!');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Shield size={22} className="brand-icon" />
        <span>MERN<span className="brand-accent">Auth</span></span>
      </div>
      <div className="navbar-links">
        {isAuthenticated ? (
          <>
            <span className="nav-greeting">Hi, {user?.name?.split(' ')[0]} 👋</span>
            <Link to="/dashboard" className="nav-link">
              <LayoutDashboard size={16} />
              Dashboard
            </Link>
            <button className="btn btn-outline-sm" onClick={handleLogout}>
              <LogOut size={16} />
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="btn btn-primary-sm">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
