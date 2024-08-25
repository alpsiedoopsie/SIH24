import React, { useState, useEffect } from 'react';
import AddProjectForm from './AddProjectForm';
import './ProjectsPage.css';


const ProjectsPage = () => {
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('projects');
    return savedProjects ? JSON.parse(savedProjects) : [];
  });

  // Function to add a new project to the list
  const handleAddProject = (newProject) => {
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);

    // Save updated projects to local storage
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  };

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <AddProjectForm onAddProject={handleAddProject} />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>Department: {project.department}</p>
            <p>Completion Time: {project.completionTime}</p>
            <p>Place: {project.place}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;