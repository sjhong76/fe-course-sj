window.addEventListener('DOMContentLoaded', () => {
    show();
});

const data_url = './employees.json';

const getJson = async () => {
    const response = await fetch(data_url);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
};

const show = async () => {
    try {
        const jsonData = await getJson();
        console.log('jsonData => ', jsonData, typeof jsonData);

        let output = `
            <h2>${jsonData.title}</h2>
            <table border="1">
                <tr>
                    <th>NO</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>DEPARTMENT</th>
                </tr>
                ${
                    jsonData.list.map((employee, idx) => `
                        <tr>
                            <td>${idx + 1}</td>
                            <td>${employee.name}</td>
                            <td>${employee.age}</td>
                            <td>${employee.department}</td>
                        </tr>
                    `).join('')
                }
            </table>
        `;

        document.querySelector('#content').innerHTML = output;
    } catch (error) {
        console.log('error => ', error);
        document.querySelector('#content').innerHTML = `<p>데이터를 불러오는 중 오류가 발생했습니다.</p>`;
    }
};