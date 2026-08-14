import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, Mail, Calendar, ShieldCheck } from 'lucide-react';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('You have been logged out.');
    navigate('/login');
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getInitials = (name) => {
    if (!name) return '??';
    return name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="dashboard-page">
      {/* Welcome Banner */}
      <div className="dashboard-banner">
        <div className="banner-content">
          <div className="avatar">{getInitials(user?.name)}</div>
          <div>
            <h1 className="banner-title">Welcome back, {user?.name?.split(' ')[0]}! 🎉</h1>
            <p className="banner-subtitle">You&apos;re successfully authenticated with JWT.</p>
          </div>
        </div>
        <button className="btn-logout" onClick={handleLogout} id="logout-btn">
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Stats Cards */}
      <div className="dashboard-grid">
        <div className="info-card">
          <div className="info-card-icon user-icon">
            <User size={22} />
          </div>
          <div className="info-card-content">
            <p className="info-label">Full Name</p>
            <p className="info-value">{user?.name || 'N/A'}</p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-card-icon mail-icon">
            <Mail size={22} />
          </div>
          <div className="info-card-content">
            <p className="info-label">Email Address</p>
            <p className="info-value">{user?.email || 'N/A'}</p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-card-icon date-icon">
            <Calendar size={22} />
          </div>
          <div className="info-card-content">
            <p className="info-label">Member Since</p>
            <p className="info-value">{formatDate(user?.createdAt)}</p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-card-icon shield-icon">
            <ShieldCheck size={22} />
          </div>
          <div className="info-card-content">
            <p className="info-label">Auth Status</p>
            <p className="info-value status-active">● Active Session</p>
          </div>
        </div>
      </div>

      {/* JWT Badge */}
      <div className="jwt-badge">
        <ShieldCheck size={16} />
        <span>Protected with JWT Authentication — Your session is secure</span>
      </div>
    </div>
  );
};

export default Dashboard;
