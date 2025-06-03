const btn = document.querySelector<HTMLButtonElement>("#btn")!;
const input = document.querySelector<HTMLInputElement>("#todoinput")!;
const form = document.querySelector<HTMLFormElement>("#todoform")!;
const list = document.querySelector<HTMLUListElement>("#todolist")!;

function handleSubmit(event: SubmitEvent) {
  event.preventDefault();
  console.log("Form submitted");
  const newTodoText = input.value;
  const newLI = document.createElement("li");
  newLI.append(newTodoText);
  list.append(newLI);
}

form.addEventListener("submit", handleSubmit);
