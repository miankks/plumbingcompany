// --- src/components/Dashboard/JobsPage.jsx ---
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./JobsPage.css";

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortField, setSortField] = useState("date");
  const [sortDirection, setSortDirection] = useState("desc");

  const allJobs = [
    {
      id: 1,
      title: "Läckreparation av diskbänk",
      client: "Martinez Familj",
      status: "completed",
      date: "2026-06-22",
      amount: "2245kr",
      priority: "Medium",
    },
    {
      id: 2,
      title: "Installation av varmvattenberedare",
      client: "Sollentuna",
      status: "in-progress",
      date: "2026-06-22",
      amount: "12000kr",
      priority: "High",
    },
    {
      id: 3,
      title: "Avloppsrooterservice",
      client: "The Faustinas",
      status: "pending",
      date: "2026-06-21",
      amount: "3800kr",
      priority: "Low",
    },
    {
      id: 4,
      title: "Akut reparation av rörsprängningar",
      client: "Downtown Cafe",
      status: "emergency",
      date: "2026-06-22",
      amount: "8900kr",
      priority: "Critical",
    },
    {
      id: 5,
      title: "Uppgradering av badrumsarmatur",
      client: "The Mians",
      status: "in-progress",
      date: "2026-06-20",
      amount: "6500kr",
      priority: "Medium",
    },
    {
      id: 6,
      title: "Kamerainspektion av avloppsledning",
      client: "Odenplan Stockholm",
      status: "completed",
      date: "2026-06-19",
      amount: "2000kr",
      priority: "Low",
    },
    {
      id: 7,
      title: "Installation av vattenavhärdningssystem",
      client: "Östermalm",
      status: "pending",
      date: "2026-06-23",
      amount: "18000kr",
      priority: "High",
    },
    {
      id: 8,
      title: "Nödreparation av gasledning",
      client: "Anderssons",
      status: "emergency",
      date: "2026-06-23",
      amount: "13500kr",
      priority: "Critical",
    },
    {
      id: 9,
      title: "Kranarbyteservice",
      client: "någon klient",
      status: "completed",
      date: "2026-06-18",
      amount: "1750kr",
      priority: "Low",
    },
    {
      id: 10,
      title: "Vattenhuvudreparation",
      client: "Södertälje",
      status: "in-progress",
      date: "2026-06-23",
      amount: "24000kr",
      priority: "High",
    },
    {
      id: 11,
      title: "Toalettinstallation & reparation",
      client: "Harrissons",
      status: "pending",
      date: "2026-06-24",
      amount: "3200kr",
      priority: "Medium",
    },
    {
      id: 12,
      title: "Hydro-Jetting-tjänst",
      client: "Riverside Apartments",
      status: "completed",
      date: "2026-06-17",
      amount: "5600kr",
      priority: "Medium",
    },
  ];

  const statusOptions = [
    "All",
    "completed",
    "in-progress",
    "pending",
    "emergency",
  ];

  const getStatusLabel = (status) => {
    const labels = {
      completed: "Completed",
      "in-progress": "In Progress",
      pending: "Pending",
      emergency: "Emergency",
    };
    return labels[status] || status;
  };

  const getPriorityColor = (priority) => {
    const colors = {
      Critical: "#dc2626",
      High: "#ea580c",
      Medium: "#d97706",
      Low: "#65a30d",
    };
    return colors[priority] || "#6b7280";
  };

  const filteredAndSortedJobs = useMemo(() => {
    let filtered = allJobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.client.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "All" || job.status === statusFilter;
      return matchesSearch && matchesStatus;
    });

    // Sort
    filtered.sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];

      if (sortField === "amount") {
        aVal = parseFloat(aVal.replace("$", "").replace(",", ""));
        bVal = parseFloat(bVal.replace("$", "").replace(",", ""));
      }

      if (typeof aVal === "string") {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }

      if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [searchTerm, statusFilter, sortField, sortDirection]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const getStatusIcon = (status) => {
    const icons = {
      completed: "fa-check-circle",
      "in-progress": "fa-spinner",
      pending: "fa-clock",
      emergency: "fa-exclamation-triangle",
    };
    return icons[status] || "fa-circle";
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span>✦</span> Faustina
        </div>
        <nav className="sidebar-nav">
          <div className="nav-label">Main</div>
          <Link to="/">
            <i className="fas fa-home"></i> Dashboard
          </Link>
          <Link to="/jobs" className="active">
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

      <main className="main jobs-page">
        <div className="jobs-header">
          <div className="jobs-header-left">
            <h1>Alla Jobb</h1>
            <p className="jobs-subtitle">Hantera och spåra alla VVS-jobb</p>
          </div>
          <div className="jobs-header-right">
            <button className="btn btn-primary">
              <i className="fas fa-plus"></i> Nytt jobb
            </button>
          </div>
        </div>

        <div className="jobs-stats-bar">
          <div className="stat-item">
            <span className="stat-number">{allJobs.length}</span>
            <span className="stat-label">Totalt antal jobb</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {allJobs.filter((j) => j.status === "in-progress").length}
            </span>
            <span className="stat-label">Pågår</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {allJobs.filter((j) => j.status === "emergency").length}
            </span>
            <span className="stat-label">Nödsituation</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {allJobs.filter((j) => j.status === "completed").length}
            </span>
            <span className="stat-label">Avslutad</span>
          </div>
        </div>

        <div className="jobs-controls">
          <div className="search-wrapper">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              className="search-input"
              placeholder="Search jobs or clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="clear-search"
                onClick={() => setSearchTerm("")}
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
          <div className="filter-wrapper">
            <i className="fas fa-filter filter-icon"></i>
            <select
              className="filter-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {statusOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt === "All" ? "Alla statusar" : getStatusLabel(opt)}
                </option>
              ))}
            </select>
          </div>
          <span className="jobs-count">
            {filteredAndSortedJobs.length} jobb hittade
          </span>
        </div>

        <div className="table-wrapper">
          <table className="jobs-table">
            <thead>
              <tr>
                <th onClick={() => handleSort("title")} className="sortable">
                  Arbetstitel
                  {sortField === "title" && (
                    <i
                      className={`fas fa-sort-${sortDirection === "asc" ? "up" : "down"}`}
                    ></i>
                  )}
                </th>
                <th onClick={() => handleSort("client")} className="sortable">
                  Klient
                  {sortField === "client" && (
                    <i
                      className={`fas fa-sort-${sortDirection === "asc" ? "up" : "down"}`}
                    ></i>
                  )}
                </th>
                <th onClick={() => handleSort("status")} className="sortable">
                  Status
                  {sortField === "status" && (
                    <i
                      className={`fas fa-sort-${sortDirection === "asc" ? "up" : "down"}`}
                    ></i>
                  )}
                </th>
                <th onClick={() => handleSort("priority")} className="sortable">
                  Prioritet
                  {sortField === "priority" && (
                    <i
                      className={`fas fa-sort-${sortDirection === "asc" ? "up" : "down"}`}
                    ></i>
                  )}
                </th>
                <th onClick={() => handleSort("date")} className="sortable">
                  Datum
                  {sortField === "date" && (
                    <i
                      className={`fas fa-sort-${sortDirection === "asc" ? "up" : "down"}`}
                    ></i>
                  )}
                </th>
                <th onClick={() => handleSort("amount")} className="sortable">
                  Belopp
                  {sortField === "amount" && (
                    <i
                      className={`fas fa-sort-${sortDirection === "asc" ? "up" : "down"}`}
                    ></i>
                  )}
                </th>
                <th>Åtgärder</th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedJobs.map((job, index) => (
                <tr
                  key={job.id}
                  className="job-row"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="job-title-cell">
                    <span className="job-title-text">{job.title}</span>
                  </td>
                  <td>
                    <div className="client-info">
                      <i className="fas fa-user client-icon"></i>
                      <span>{job.client}</span>
                    </div>
                  </td>
                  <td>
                    <span className={`status-badge status-${job.status}`}>
                      <i
                        className={`fas ${getStatusIcon(job.status)} status-icon`}
                      ></i>
                      {getStatusLabel(job.status)}
                    </span>
                  </td>
                  <td>
                    <span
                      className="priority-badge"
                      style={{
                        backgroundColor: getPriorityColor(job.priority),
                      }}
                    >
                      {job.priority}
                    </span>
                  </td>
                  <td>
                    <div className="date-info">
                      <i className="far fa-calendar-alt date-icon"></i>
                      {new Date(job.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </td>
                  <td>
                    <span className="amount-text">{job.amount}</span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="action-btn view-btn"
                        title="View details"
                      >
                        <i className="fas fa-eye"></i>
                      </button>
                      <button className="action-btn edit-btn" title="Edit job">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        className="action-btn delete-btn"
                        title="Delete job"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredAndSortedJobs.length === 0 && (
                <tr>
                  <td colSpan="7" className="empty-state">
                    <div className="empty-state-content">
                      <i className="fas fa-search empty-icon"></i>
                      <h3>No jobs found</h3>
                      <p>Try adjusting your search or filter criteria</p>
                      <button
                        className="btn btn-outline"
                        onClick={() => {
                          setSearchTerm("");
                          setStatusFilter("All");
                        }}
                      >
                        Clear filters
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default JobsPage;
