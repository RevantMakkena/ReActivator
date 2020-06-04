import {Dispatcher} from "./flux";
const controlPanelDispatcher = new Dispatcher();

document
  .getElementById("userNameInput")
  .addEventListener("input", ({target}) => {
    console.log("Dispatching....", target.value);
    controlPanelDispatcher.dispatcher(`TODO_NAMEINPUTACTION`);
  });

document.forms.fontSizeForm.fontSize.forEach((element) => {
  element.addEventListener("change", ({target}) => {
    controlPanelDispatcher.dispatcher(`TODO_FONTUPDATEACTION`);
  });
});

controlPanelDispatcher.register((action) => {
  console.log("Action.." + action);
});
