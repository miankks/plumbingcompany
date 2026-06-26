// --- src/components/Dashboard/Dashboard.jsx ---
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const stats = [
    { label: "Total Jobs", value: "1,247", change: "+12%", up: true },
    { label: "Active Jobs", value: "18", change: "+3", up: true },
    { label: "Revenue (MTD)", value: "$42,800", change: "+8%", up: true },
    { label: "Avg. Rating", value: "4.9★", change: "+0.2", up: true },
  ];

  const recentJobs = [
    {
      title: "Kitchen Sink Leak",
      client: "The Martinez Family",
      status: "completed",
      date: "2h ago",
    },
    {
      title: "Water Heater Install",
      client: "Oak Street Residences",
      status: "in-progress",
      date: "4h ago",
    },
    {
      title: "Drain Rooter Service",
      client: "The Johnsons",
      status: "pending",
      date: "1d ago",
    },
    {
      title: "Emergency Pipe Burst",
      client: "Downtown Cafe",
      status: "emergency",
      date: "30m ago",
    },
    {
      title: "Bathroom Fixture Update",
      client: "The Parkers",
      status: "in-progress",
      date: "3d ago",
    },
  ];

  const chartData = [
    { day: "Mon", value: 4 },
    { day: "Tue", value: 6 },
    { day: "Wed", value: 3 },
    { day: "Thu", value: 8 },
    { day: "Fri", value: 5 },
    { day: "Sat", value: 2 },
    { day: "Sun", value: 1 },
  ];
  const maxValue = Math.max(...chartData.map((d) => d.value));

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span>✦</span> Faustina
        </div>
        <nav className="sidebar-nav">
          <div className="nav-label">Main</div>
          <Link to="/" className="active">
            <i className="fas fa-home"></i> Dashboard
          </Link>
          <Link to="/jobs">
            <i className="fas fa-clipboard-list"></i> Jobs
          </Link>
          <a href="#">
            <i className="fas fa-users"></i> Clients
          </a>
          <a href="#">
            <i className="fas fa-calendar-alt"></i> Schedule
          </a>
          <div className="nav-label">Business</div>
          <a href="#">
            <i className="fas fa-chart-line"></i> Reports
          </a>
          <a href="#">
            <i className="fas fa-receipt"></i> Invoices
          </a>
          <a href="#">
            <i className="fas fa-cog"></i> Settings
          </a>
        </nav>
        <div className="sidebar-footer">
          <i
            className="fas fa-circle"
            style={{ color: "#4ade80", fontSize: "0.6rem" }}
          ></i>{" "}
          Online
        </div>
      </aside>

      <main className="main">
        <div className="topbar">
          <div className="topbar-left">
            <h1>Dashboard</h1>
            <p>Welcome back, Mike — here's your plumbing overview</p>
          </div>
          <div className="topbar-right">
            <span className="date-badge">
              <i
                className="far fa-calendar-alt"
                style={{ marginRight: "8px" }}
              ></i>
              {new Date().toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </span>
            <div className="avatar">M</div>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div className="stat-card" key={i}>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
              <div className={`stat-change ${stat.up ? "up" : "down"}`}>
                {stat.change} from last month
              </div>
            </div>
          ))}
        </div>

        <div className="dashboard-grid">
          <div className="card">
            <div className="card-header">
              <h3>
                <i
                  className="fas fa-chart-bar"
                  style={{ color: "var(--clay)", marginRight: "8px" }}
                ></i>{" "}
                Weekly Jobs
              </h3>
              <Link to="/jobs" className="more">
                View all
              </Link>
            </div>
            <div className="chart-placeholder">
              {chartData.map((d, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <div
                    className="chart-bar"
                    style={{
                      height: `${(d.value / maxValue) * 160}px`,
                      backgroundColor:
                        d.value === maxValue ? "var(--clay)" : "#d4c5b8",
                      width: "100%",
                      maxWidth: "36px",
                    }}
                  ></div>
                  <div className="chart-bar-label">{d.day}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>
                <i
                  className="fas fa-bolt"
                  style={{ color: "var(--clay)", marginRight: "8px" }}
                ></i>{" "}
                Quick Actions
              </h3>
            </div>
            <div className="quick-actions">
              <a href="#" className="quick-action">
                <i className="fas fa-plus-circle"></i>
                <span>New Job</span>
              </a>
              <a href="#" className="quick-action">
                <i className="fas fa-user-plus"></i>
                <span>Add Client</span>
              </a>
              <a href="#" className="quick-action">
                <i className="fas fa-file-invoice"></i>
                <span>Create Invoice</span>
              </a>
              <a href="#" className="quick-action">
                <i className="fas fa-calendar-plus"></i>
                <span>Schedule</span>
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>
              <i
                className="fas fa-clock"
                style={{ color: "var(--clay)", marginRight: "8px" }}
              ></i>{" "}
              Recent Jobs
            </h3>
            <Link to="/jobs" className="more">
              View all jobs
            </Link>
          </div>
          <ul className="job-list">
            {recentJobs.map((job, i) => (
              <li key={i}>
                <div className="job-info">
                  <div className="job-title">{job.title}</div>
                  <div className="job-meta">
                    <span>
                      <i className="far fa-user"></i> {job.client}
                    </span>
                    <span>
                      <i className="far fa-clock"></i> {job.date}
                    </span>
                  </div>
                </div>
                <span className={`job-status ${job.status}`}>
                  {job.status === "in-progress" ? "In Progress" : job.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
