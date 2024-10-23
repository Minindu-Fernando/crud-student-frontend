document.getElementById("loadStudentBtn").addEventListener("click", function() {
    fetch("http://localhost:8080/student")
      .then(response => response.json()) 
      .then(data => {
        const tbody = document.querySelector("#student-table tbody");
        tbody.innerHTML = ""; 

        data.forEach(student => {
          const row = document.createElement("tr");

          row.innerHTML = `
            <td>${student.studentName}</td>
            <td>${student.studentAge}</td>
            <td>${student.studentContact}</td>
            <td>${student.gurdianName}</td>
            <td>${student.gurdianAddress}</td>
            <td>${student.gurdianContact}</td>
             <td>
          <button class="btn btn-warning btn-sm" onclick="editStudent(${student.id})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteStudent('${student.studentContact}')">Delete</button>
        </td>
          `;
          tbody.appendChild(row);
        });
      })
      .catch(error => console.error("Error fetching student data:", error));
  });

  function deleteStudent(studentContact) {
    if (confirm("Are you sure you want to delete this student?")) {
      fetch(`http://localhost:8080/student/${studentContact}`, {
        method: "DELETE"
      })
      .then(() => {
        alert("Student deleted successfully");
        location.reload(); 
      })
      .catch(error => console.error("Error deleting student:", error));
    }
  }
