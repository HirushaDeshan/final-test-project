let form = document.querySelector("form");
        let successMessage = document.querySelector("#successMessage");
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            document.querySelector("#sub").value = "Submitting..";
            let data = new FormData(form);
            fetch('https://script.google.com/macros/s/AKfycbzpnkb9-TjRYp2N2IGuBOOQOQeKkysxKru9csPjKSqnbjPwffsVH2EIyDA337a0tPgQ/exec', {
                    method: "POST",
                    body: data
                })
                .then(() => {
                    successMessage.style.display = "block";
                    form.reset();
                    document.querySelector("#sub").value = "Submit";
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        })