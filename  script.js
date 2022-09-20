const form = document.querySelector(".form");
const btnNewContact = document.querySelector(".add-new");
const inputContactName = document.querySelector(".contact-name");
const inputContactNumber = document.querySelector(".number-contact");
const contacts = [];
const numbers = [];

let lines = "";

btnNewContact.addEventListener("click", function () {
  document.querySelector(".section-form").style.display = "block";
});

inputContactNumber.addEventListener("keypress", function () {
  let inputLength = inputContactNumber.value.length;

  if (inputLength === 0) {
    inputContactNumber.value += "(";
  } else if (inputLength === 3) {
    inputContactNumber.value += ") ";
  } else if (inputLength === 10) {
    inputContactNumber.value += "-";
  }
});

function addNewLine() {
  if (contacts.includes(inputContactName.value)) {
    alert(`O contato ${inputContactName.value} já existe`);
  } else {
    contacts.push(inputContactName.value);
    numbers.push(inputContactNumber.value);
    let line = `<tr>`;
    line += `<td>${inputContactName.value}</td>`;
    line += `<td>${inputContactNumber.value}</td>`;
    line += `</tr>`;

    lines += line;
  }

  inputContactName.value = "";
  inputContactNumber.value = "";
}

function addNewContact() {
  const newContact = document.querySelector("tbody");
  newContact.innerHTML = lines;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  addNewLine();
  addNewContact();
});
