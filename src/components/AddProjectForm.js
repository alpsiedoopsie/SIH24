import React, { useState } from 'react';

const AddProjectForm = ({ onAddProject }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [department, setDepartment] = useState('');
  const [completionTime, setCompletionTime] = useState('');
  const [place, setPlace] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      name,
      description,
      department,
      completionTime,
      place,
    };

    onAddProject(newProject);
    setName('');
    setDescription('');
    setDepartment('');
    setCompletionTime('');
    setPlace('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Project Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Department:</label>
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Completion Time:</label>
        <input
          type="text"
          value={completionTime}
          onChange={(e) => setCompletionTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Place:</label>
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Project</button>
    </form>
  );
};

export default AddProjectForm;