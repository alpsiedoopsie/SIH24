import React, { useState, useEffect } from "react";
import AddProjectForm from "./AddProjectForm";
import "./ProjectsPage.css";
import MapWithMarkers from "./MapwithMarker";

const ProjectsPage = () => {
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem("projects");
    return savedProjects ? JSON.parse(savedProjects) : [];
  });
  const [newPlace, setNewPlace] = useState("");

  const handleAddProject = (newProject) => {
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    setNewPlace(newProject.place); // Set the new place
  };

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="form-and-map-container">
        <div className="form-container">
          <AddProjectForm onAddProject={handleAddProject} />
        </div>
        <div className="map-container">
          <MapWithMarkers place={newPlace} />
        </div>
      </div>
      <ul>
        {projects.map((project) => (
          <React.Fragment key={project.id}>
            <li>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <p>Department: {project.department}</p>
              <p>Completion Time: {project.completionTime}</p>
              <p>Place: {project.place}</p>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
