// console.log("JS FILE CHAL RAHI HAI");
// const { createClient } = supabase;
// const supabaseURL = 'https://fyitjrqdacpgpoehmrfn.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5aXRqcnFkYWNwZ3BvZWhtcmZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAxNDUyMTAsImV4cCI6MjEwNTcyMTIxMH0.EHa1IEnDniSB1y_bDpZq2ycI64pqukv8Y_DpGz-aLVg';


// const supabaseclient = createClient(supabaseURL, supabaseKey)

// // Todo data
// let todos = [];

// // HTML elements
// const taskInput = document.getElementById("taskInput");
// const addBtn = document.getElementById("addBtn");
// const todoList = document.getElementById("todoList");


// ///
// let currentUser = null;

// async function checkLogin() {
//     const { data: { user }, error } =
//         await supabaseclient.auth.getUser();

//     if (error || !user) {
//         window.location.href = "auth.html";
//         return false;
//     }

//     currentUser = user;
//     console.log("Current user ID:", currentUser.id);

//     return true;
// }

// // =========================
// // ADD TODO
// // =========================

// addBtn.addEventListener("click", async function () {

//     const task = taskInput.value.trim();

//     if (task === "") {
//         alert("Please enter a task");
//         return;
//     }

//     ///
//     const loggedIn = await checkLogin();

//     if (!loggedIn) return;

//     const newTodo = {
//         text: task,
//         iscompleted: false,
//         user_id: currentUser.id
//     };

//     // todos.push(newTodo);

//     const { error } = await supabaseclient
//         .from('todoapp')
//         .insert(newTodo);

//     if (error) {
//         console.log('Error hai bhai', error);
//     } else {
//         console.log("Data insert ho gaya:", newTodo.task);
//     }
    

//     taskInput.value = "";

//     renderTodos();
// });

// //////////fetch
// // async function gettodosss() {
// //     console.log("hello fiza")
// //     const loggedIn = await checkLogin();

// //     if (!loggedIn) return;

// //     const { data, error } = await supabaseclient
// //         .from("todoapp")
// //         .select("*")
// //         .eq("user_id", currentUser.id);

// //     if (error) {
// //         console.log("Fetch error:", error);
// //         return;
// //     }

// //     todos = data;
// //     renderTodos();
// // }
// async function gettodosss() {
//     const loggedIn = await checkLogin();

//     if (!loggedIn) return;

//     const { data, error } = await supabaseclient
//         .from("todoapp")
//         .select("*")
//         .eq("user_id", currentUser.id);

//     if (error) {
//         console.log("Fetch error:", error.message);
//         return;
//     }

//     console.log("Fetched todos:", data);

//     todos = data || [];
//     renderTodos();
// }

// gettodosss();

// gettodosss();
// // =========================
// // SHOW TODOS
// // =========================

// // function renderTodos() {

// //     todoList.innerHTML = "";

// //     todos.forEach(async function (todo) {

// //         const todoDiv = document.createElement("div");
// //         todoDiv.className = "todo";
// //         todoDiv.innerHTML = `
// //             <div class="todo-text ${todo.iscompleted ? "completed" : ""}">
// //                 ${todo.task}
// //             </div>

// //             <div class="actions">

// //                 <button 
// //                     class="edit-btn"
// //                     onclick="editTodo(${todo.id})"
// //                 >
// //                     Edit
// //                 </button>

// //                 <button 
// //                     class="delete-btn"
// //                     onclick="deleteTodo(${todo.id})"
// //                 >
// //                     Delete
// //                 </button>

// //             </div>
// //         `;



// //         todoList.appendChild(todoDiv);
// //     });
// // }
// function renderTodos() {
//     todoList.innerHTML = "";

//     todos.forEach(function (todo) {
//         const todoDiv = document.createElement("div");
//         todoDiv.className = "todo";

//         todoDiv.innerHTML = `
//             <div class="todo-text ${todo.iscompleted ? "completed" : ""}">
//                 ${todo.text}
//             </div>

//             <div class="actions">
//                 <button class="edit-btn" onclick="editTodo(${todo.id})">
//                     Edit
//                 </button>

//                 <button class="delete-btn" onclick="deleteTodo(${todo.id})">
//                     Delete
//                 </button>
//             </div>
//         `;

//         todoList.appendChild(todoDiv);
//     });
// }


// // =========================
// // DELETE TODO
// // =========================

// async function deleteTodo(id) {


//     const { data, error } = await supabaseclient
//         .from("todoapp")
//         .delete()
//         .eq("user_id", id)
//         .select();

//     if (error) {
//         console.log("Delete error:", error);
//         return;
//     }


//     todos = todos.filter(function (todo) {
//         return todo.id !== id;
//     });

//     //     const { data, error } = await supabase
//     //   .from('todosss')
//     //   .delete()
//     //   .match({ id: 666 })

//     todos = data;

//     renderTodos();
// }


// // =========================
// // EDIT TODO
// // =========================

// // async function editTodo(id) {

// //     const todo = todos.find(function (todo) {
// //         return todo.id === id;
// //     });

// //     const newTask = prompt("Edit your task:", todo.text);

// //     if (newTask === null) {
// //         return;
// //     }

// //     if (newTask.trim() === "") {
// //         return;
// //     }


// //     const { error } = await supabaseclient
// //     .from('todosss')
// //     .update({
// //         text: newTask.trim()
// //     })
// //     .eq('id', id)

// //     if(error){
// //         console.log('update nhi huwa', error)
// //     }

// //     todo.text = newTask.trim();


// //     renderTodos();
// // }

// async function editTodo(id) {

//     const todo = todos.find(function (todo) {
//         return todo.id === id;
//     });

//     const newTask = prompt("Edit your task:", todo.text);

//     if (newTask === null) {
//         return;
//     }

//     if (newTask.trim() === "") {
//         return;
//     }

//     const { data, error } = await supabaseclient
//         .from("todoapp")
//         .update({
//             task: newTask.trim()
//         })
//         .eq("user_id", id)
//         .select();

//     console.log("UPDATE DATA:", data);
//     console.log("UPDATE ERROR:", error);

//     if (error) {
//         console.log("update nhi huwa", error);
//         return;
//     }

//     todo.text = newTask.trim();

//     renderTodos();
// }
console.log("JS FILE CHAL RAHI HAI");
const { createClient } = supabase;

const supabaseURL = "https://fyitjrqdacpgpoehmrfn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5aXRqcnFkYWNwZ3BvZWhtcmZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAxNDUyMTAsImV4cCI6MjEwNTcyMTIxMH0.EHa1IEnDniSB1y_bDpZq2ycI64pqukv8Y_DpGz-aLVg";

const supabaseclient = createClient(supabaseURL, supabaseKey);


// =========================
// TODO DATA
// =========================

let todos = [];
let currentUser = null;


// =========================
// HTML ELEMENTS
// =========================

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");


// =========================
// CHECK LOGIN
// =========================

async function checkLogin() {
    const { data, error } = await supabaseclient.auth.getUser();

    if (error || !data.user) {
        window.location.href = "auth.html";
        return false;
    }

    currentUser = data.user;

    console.log("Current user ID:", currentUser.id);

    return true;
}


// =========================
// FETCH TODOS
// =========================

async function gettodosss() {
    const loggedIn = await checkLogin();

    if (!loggedIn) return;

    const { data, error } = await supabaseclient
        .from("todoapp")
        .select("*")
        .eq("user_id", currentUser.id);

    if (error) {
        console.log("Fetch error:", error.message);
        return;
    }

    console.log("Fetched todos:", data);

    todos = data || [];

    renderTodos();
}


// =========================
// ADD TODO
// =========================

addBtn.addEventListener("click", async function () {
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    const loggedIn = await checkLogin();

    if (!loggedIn) return;

    const newTodo = {
        text: task,
        iscompleted: false,
        user_id: currentUser.id
    };

    const { error } = await supabaseclient
        .from("todoapp")
        .insert(newTodo);

    if (error) {
        console.log("Insert error:", error.message);
        alert("Task add nahi hua. Console check karo.");
        return;
    }

    console.log("Data insert ho gaya:", task);

    taskInput.value = "";

    await gettodosss();
});


// =========================
// SHOW TODOS
// =========================

function renderTodos() {
    todoList.innerHTML = "";

    if (todos.length === 0) {
        todoList.innerHTML = "<p>No tasks yet. Add your first task!</p>";
        return;
    }

    todos.forEach(function (todo) {
        const todoDiv = document.createElement("div");

        todoDiv.className = "todo";

        const todoText = document.createElement("div");
        todoText.className = "todo-text";

        if (todo.iscompleted) {
            todoText.classList.add("completed");
        }

        // Display task text safely
        todoText.textContent = todo.text;

        const actions = document.createElement("div");
        actions.className = "actions";

        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.textContent = "Edit";

        editBtn.addEventListener("click", function () {
            editTodo(todo.id);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function () {
            deleteTodo(todo.id);
        });

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        todoDiv.appendChild(todoText);
        todoDiv.appendChild(actions);

        todoList.appendChild(todoDiv);
    });
}


// =========================
// DELETE TODO
// =========================

async function deleteTodo(id) {
    const loggedIn = await checkLogin();

    if (!loggedIn) return;

    const { error } = await supabaseclient
        .from("todoapp")
        .delete()
        .eq("id", id)
        .eq("user_id", currentUser.id);

    if (error) {
        console.log("Delete error:", error.message);
        alert("Task delete nahi hua.");
        return;
    }

    console.log("Todo deleted successfully");

    await gettodosss();
}


// =========================
// EDIT TODO
// =========================

async function editTodo(id) {
    const todo = todos.find(function (item) {
        return item.id === id;
    });

    if (!todo) return;

    const newTask = prompt("Edit your task:", todo.text);

    if (newTask === null) return;

    if (newTask.trim() === "") {
        alert("Task cannot be empty");
        return;
    }

    const loggedIn = await checkLogin();

    if (!loggedIn) return;

    const { error } = await supabaseclient
        .from("todoapp")
        .update({
            text: newTask.trim()
        })
        .eq("id", id)
        .eq("user_id", currentUser.id);

    if (error) {
        console.log("Update error:", error.message);
        alert("Task update nahi hua.");
        return;
    }

    console.log("Todo updated successfully");

    await gettodosss();
}


// =========================
// LOAD TODOS ON PAGE LOAD
// =========================

gettodosss();