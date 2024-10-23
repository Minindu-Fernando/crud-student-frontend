
document.getElementById("btn-register").addEventListener(
    "click",saveStudent
)
function saveStudent(){
   let requestBody = mapRequest()
    fetch("http://localhost:8080/student",{
        method: "POST",
        body: JSON.stringify(requestBody),
        headers:{
            "Content-type":"application/json"
        }
    })
    .then(res => res.json())
    .then(data=>{
        console.log(data);
    })

}

function mapRequest(){
    let requestBody = {
        studentName:undefined,
        studentAge:undefined,
        studentContact:undefined,
        gurdianName:undefined,
        gurdianAddress:undefined,
        gurdianContact:undefined,
    }

    requestBody.studentName = document.getElementById("txt-student-name").value;
    requestBody.studentAge =document.getElementById("txt-student-age").value;
    requestBody.studentContact = document.getElementById("txt-student-contact").value;

    requestBody.gurdianName =document.getElementById("txt-gurdian-name").value;
    requestBody.gurdianAddress = document.getElementById("txt-gurdian-address").value;
    requestBody.gurdianContact = document.getElementById("txt-gurdian-contact").value;

    return requestBody;
}
