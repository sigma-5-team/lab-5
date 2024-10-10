// user-1 form for messages
let form1_button = document.querySelector("#form-1");
let textarea1 = document.querySelector("#user1");

// user-2 form for messages
let form2_button = document.querySelector("#form-2");
let textarea2 = document.querySelector("#user2");

// block for keeping overall chat
let overall_chat = document.querySelector(".overall-chat");


/**
 * Function to get value of textarea
 *
 * @param elem textarea (but can be another, as JS is not strictly-type)
 * */
function getTextAreaTxt(elem) {
    if(elem.tagName.toLowerCase() === 'textarea') {
        return elem.value;
    }

    return null;
}

/**
 * Function to create a block, consisting user's message in it
 *
 * @param elem textarea (but can be another, as JS is not strictly-type)
 * */
function createUserMessage(elem) {
    // creating a new div for storing the message
    let new_msg_div = document.createElement("div");

    // getting textarea id, will be used for determining users
    let elem_id = elem.getAttribute("id");

    // add classes, which are used for both users' messages
    new_msg_div.classList.add("col", "col-lg-8", "col-10", "mb-2", "rounded-2", "p-3")

    // Adding bootstrap classes to the block, based on users
    if (elem_id === 'user1') {
        new_msg_div.classList.add("offset-lg-1", "bg-light");
    } else if (elem_id === 'user2') {
        new_msg_div.classList.add("offset-lg-3", "offset-2", "bg-primary", "text-light");
    } else {
        alert('Something went wrong');
    }

    let msg_txt = getTextAreaTxt(elem);

    // if content is empty, do nothing
    if(msg_txt !== '') {
        new_msg_div.innerText = `${elem_id}:` + "\n" + msg_txt;
        overall_chat.appendChild(new_msg_div);
    } else {
        alert("Empty message")
    }

    // setting empty textarea after submitting
    elem.value = '';
}

form1_button.addEventListener("click", function (event) {
    event.preventDefault(); // for preventing from reload
    createUserMessage(textarea1);
});
form2_button.addEventListener("click", function (event) {
    event.preventDefault();
    createUserMessage(textarea2);
});