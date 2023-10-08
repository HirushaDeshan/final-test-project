const table_data = document.getElementById('table_data');
fetch("https://script.google.com/macros/s/AKfycbzpnkb9-TjRYp2N2IGuBOOQOQeKkysxKru9csPjKSqnbjPwffsVH2EIyDA337a0tPgQ/exec", {
    method: "GET"
}).then(res => res.json()).then(datas => {
    datas.myalldate.forEach((data, index) => {
        // Skip the first row (index 0)
        if (index !== 0) {
            let Name = data[0];
            let Email = data[1];
            let Phone = data[2];
            let Address = data[3];

            table_data.innerHTML += `
            <tr>
                <td>${Name}</td>
                <td>${Email}</td>
                <td>${Phone}</td>
                <td>${Address}</td>
            </tr>`;
            let successMessage = document.querySelector("#successMessage");
            successMessage.style.display = "block";
        }
    });
});
