window.addEventListener('DOMContentLoaded', () => {
    showEmployees();
});

//1. JSON 데이터 가져오기
const url = `http://127.0.0.1:5500/javascript/13.asyncronous/employees.json`;
const getEmployees = async () => {
    let response = await fetch(url);
    return response.json();
}
// async function getEmployees() {
//     let response = await fetch(url);
//     return response.json();
// }

//2. HTML 파일에 출력하기
const showEmployees = async () => {
    let employees = await getEmployees();
    console.log(employees);
    

    let output = `
        <h2>${employees.title}</h2>
        <table border=1>
            <tr>
                <th>NO</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>ADDRESS</th>
            </tr>
            ${
                employees.list.map((employee, idx ) =>
                    `
                        <tr>
                            <th>${idx+1}</th>
                            <th>${employee.name}</th>
                            <th>${employee.age}</th>
                            <th>${employee.department}</th>
                        </tr>
                    `
                ).join("")
            }
        </table>
    `;

    document.querySelector('#content').innerHTML = output;
}