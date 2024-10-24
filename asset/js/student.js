document
  .getElementById("loadStudentBtn")
  .addEventListener("click", function () {
    fetch("http://localhost:8080/student")
      .then((response) => response.json())
      .then((data) => {
        const tbody = document.querySelector("#student-table tbody");
        tbody.innerHTML = "";

        data.forEach((student) => {
          const row = document.createElement("tr");

          row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.studentName}</td>
            <td>${student.studentAge}</td>
            <td>${student.studentContact}</td>
            <td>${student.gurdianName}</td>
            <td>${student.gurdianAddress}</td>
            <td>${student.gurdianContact}</td>
             <td>
           <button class="btn btn-warning btn-sm" onclick="editStudent(${student.id})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteStudent(${student.id})">Delete</button>
        </td>
          `;
          tbody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error fetching student data:", error));
  });

  function deleteStudent(id) {
    fetch(`http://localhost:8080/student?id=${id}`, {
      method: "DELETE"
    })
    .then(response => {
      if (response.ok) {
        alert("Student deleted successfully!");
        document.getElementById("loadStudentBtn").click(); 
      } else {
        alert("Failed to delete student");
      }
    })
    .catch(error => console.error("Error deleting student:", error));
  }

  