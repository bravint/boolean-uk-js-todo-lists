let arr1 = [];

for (let i=0; i < users.length; i++) {
    arr1.push([users[i].id, users[i].name, users[i].address.city])
}

alert(arr1);

let arr2 = [];
let idRequest = Number(prompt('Enter user ID'));

if (isNaN(idRequest) || idRequest > users.length) {
    alert ('Option entered is not valid, script halted')
} else {   
    for (let i=0; i < todos.length; i++) {
        if (todos[i].userId === idRequest) {
            arr2.push(todos[i].title)
        }
    }
}

alert (arr2);

/*Challenge

let arr3 = [];
let idRequest = Number(prompt('Enter user ID'));
let todoOption = Number(prompt('Enter 1 to view list, 2 to add an entry, 3 to modify entry completion status or 4 to delete list entry'));

if (isNaN(idRequest) || idRequest > users.length ||isNaN(todoOption) || todoOption < 1 || todoOption > 4) {
    alert ('Option entered is not valid, script halted');
} else if (todoOption === 1) {
    for (let i=0; i < todos.length; i++) {
        if (todos[i].userId === idRequest) {
            arr3.push([todos[i].id, todos[i].title, todos[i].completed]);
        }
    }
    alert (arr3);   
} else if (todoOption === 2) {
    let newItemTitle = prompt('Add new task');
    let newItemObject = {
        userId:idRequest,
        id:todos.length +2,
        title:newItemTitle,
        completed:false
    }
    todos.push(newItemObject);

} else if (todoOption === 3) {




}
*/