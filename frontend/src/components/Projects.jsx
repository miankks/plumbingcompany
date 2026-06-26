// --- src/components/Projects.jsx ---
import { useState } from "react";
import "./Projects.css";

const allProjects = [
  {
    id: 1,
    title: "Uppgradering av diskbänk och kran",
    category: "Kitchen",
    tag: "Kök",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Byte av badrumsrör",
    category: "Bathroom",
    tag: "Badrum",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Installation av varmvattenberedare",
    category: "Installation",
    tag: "Installation",
    img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Avloppsrensning och rotborttagning",
    category: "Drain",
    tag: "Dränare",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "Utomhuskran och bevattning",
    category: "Outdoor",
    tag: "Utomhus",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&auto=format&fit=crop&q=60",
  },
];

const categories = [
  "All",
  "Kitchen",
  "Bathroom",
  "Installation",
  "Drain",
  "Outdoor",
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <h2>Senaste VVS-projekt</h2>
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="projects-grid">
          {filtered.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.img} alt={project.title} loading="lazy" />
                <span className="project-category-badge">
                  {project.category}
                </span>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="project-meta">
                  <span>
                    <i className="fas fa-calendar-alt"></i> 2026
                  </span>
                  <span>
                    <i className="fas fa-tag"></i> {project.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="no-projects">Inga projekt i denna kategori ännu.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
