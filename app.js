let todo = [];
while (true) {
    let task = prompt("Enter a command (a, d, l, q):");

    if (task === "q") {
        console.log("You chose to exit.");
        break;
    } else if (task === "a") {
        let newTask = prompt("Please add something:");
        todo.push(newTask);
        console.log(`Added: "${newTask}"`);
    } else if (task === "d") {
        let index = parseInt(prompt("Enter the index of the task to delete (starting from 0):"));
        if (!isNaN(index) && index >= 0 && index < todo.length) {
            let removed = todo.splice(index, 1);
            console.log(`Deleted: "${removed[0]}"`);
        } else {
            console.log("Invalid index.");
        }
    } else if (task === "l") {
        console.log("Your tasks:");
        todo.forEach((item, index) => {
            console.log(`${index}: ${item}`);
        });
    } else {
        console.log("You entered an invalid command.");
    }
}