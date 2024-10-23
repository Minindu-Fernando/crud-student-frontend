function getStudents() {
    fetch("http://localhost:8080/student")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Error fetching students:', error));
}