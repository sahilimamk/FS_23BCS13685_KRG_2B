import React, { useState } from 'react';

function EmployeeList() {
  const employees = ["Sahi", "name2", "name3", "name4", "name5"];

  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter(name =>
    name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div style={{ margin: "20px" }}>
      <h2>Employee List</h2>

      <input
        type="text"
        placeholder="Search by starting text..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "6px", width: "200px" }}
      />

      <ul>
        {filteredEmployees.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
