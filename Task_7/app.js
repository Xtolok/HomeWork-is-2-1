const checkInput = () => {
    let input = document.querySelector('#meeting-name').value;
    let input1 = document.querySelector('#meeting-place').value;
    let input2 = document.querySelector('#meeting-time').value;
    let input3 = document.querySelector('#meeting-description').value;
    let input4 = document.querySelector('#meeting-participants').value;
    let buttom = document.querySelector('#taskBtn');
    if (input !== "" && input1 !== "" && input2 !== "" && input3 !== "" && input4 !== "") {
        buttom.disabled = false;
    } else {
        buttom.disabled = true;
    }
}

const addTask = () => {
    let task = document.querySelector('#meeting-name').value;
    let task1 = document.querySelector('#meeting-place').value;
    let task2 = document.querySelector('#meeting-time').value;
    let task3 = document.querySelector('#meeting-description').value;
    let task4 = document.querySelector('#meeting-participants').value;
    let Li = document.createElement('Li');
    Li.textContent = task
    let Li1 = document.createElement('Li');
    Li1.textContent = task1
    let Li2 = document.createElement('Li');
    Li2.textContent = task2
    let Li3 = document.createElement('Li');
    Li3.textContent = task3
    let Li4 = document.createElement('Li');
    Li4.textContent = task4
    document.querySelector('#meeting-name1').appendChild(Li);
    document.querySelector('#meeting-name').value = "";
    document.querySelector('#meeting-place1').appendChild(Li1);
    document.querySelector('#meeting-place').value = "";
    document.querySelector('#meeting-time1').appendChild(Li2);
    document.querySelector('#meeting-time').value = "";
    document.querySelector('#meeting-description1').appendChild(Li3);
    document.querySelector('#meeting-description').value = "";
    document.querySelector('#meeting-participants1').appendChild(Li4);
    document.querySelector('#meeting-participants').value = "";
    document.querySelector('#taskBtn').disabled = true;
}