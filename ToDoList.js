let input = prompt("What whould you like to do?")
const todos = ['Walk a dog', "Make a bed"]
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('****************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i + 1} : ${todos[i]}`)
        }
        console.log('****************')
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is a new Todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice((index - 1), 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log("Unknown index")
        }
    }

    input = prompt("What whould you like to do?")
}
console.log("Ok, you quit the app!")