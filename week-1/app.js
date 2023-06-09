document.addEventListener('DOMContentLoaded', () => {
    const saveBtnElm = document.querySelector("#saveBtn");
    saveBtnElm.addEventListener('click', () => {
        const userApproved = confirm("Are you sure to save this form?");
        if(userApproved) {
            const remarks = prompt("Input your remarks");
            alert("Data saved");
            alert(remarks);
        }
        else {
            alert("Task cancelled");
        }
    });
});