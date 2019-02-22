fetch("/tasks").then(function(res) {
    res.json().then(function(data) {
        console.log(data);
        data.forEach((task) => {
            let taskhtml = document.createElement("li");
            let deletebutton = document.createElement('button');
            let updatebutton = document.createElement('button');
            deletebutton.innerHTML = "Delete this task";
            updatebutton.innerHTML = "update this task";

            updatebutton.addEventListener('click', function() {
                updatetask(task._id, task.description);
            });

            deletebutton.addEventListener('click', function() {
                deletetask(task._id);
            });

            taskhtml.innerHTML = task.description;
            document.getElementById('task-area').append(taskhtml);
            document.getElementById('task-area').append(deletebutton);
            document.getElementById('task-area').append(updatebutton);
        });
    })
})

function updatetask(objectid, description) {
    let input = document.createElement('input');
    input.placeholder = description;
    input.id = "updateinput";
    let submitinput = document.createElement('button');
    submitinput.innerHTML = "submit changes";
    submitinput.addEventListener('click', function() {
        fetch('/tasks/update/'+ objectid, { method: 'PUT', body: JSON.stringify({
            description: document.getElementById('updateinput').value,
        }), headers: {
            "Content-Type": "application/json"
        }
    });
});
    document.getElementById('update-area').append(input);
    document.getElementById('update-area').append(submitinput);
}

function deletetask(objectid) {
    console.log(objectid);
    fetch('/tasks/delete/'+objectid, {method: 'DELETE'});
}
