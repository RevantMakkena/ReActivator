import {Dispatcher, Store} from "./flux";
const controlPanelDispatcher = new Dispatcher();
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_FONT_SIZE_PREFERENCE = "UPDATE_FONT_SIZE_PREFERENCE";

const updateUserNameAction = (name) => {
  return {
    type: UPDATE_USERNAME,
    value: name,
  };
};

const fontSizePreferenceUpdateAction = (name) => {
  return {
    type: UPDATE_FONT_SIZE_PREFERENCE,
    value: name,
  };
};

document
  .getElementById("userNameInput")
  .addEventListener("input", ({target}) => {
    controlPanelDispatcher.dispatcher(
      updateUserNameAction(target.value)
    );
  });

document.forms.fontSizeForm.fontSize.forEach((element) => {
  element.addEventListener("change", ({target}) => {
    controlPanelDispatcher.dispatcher(
      fontSizePreferenceUpdateAction(target.value)
    );
  });
});
class UserPrefStore extends Store {
  getInitialState() {
    debugger;
    return localStorage[`preferences`]
      ? JSON.parse(localStorage[`preferences`])
      : {
          userName: "rk",
          fontSize: "small",
        };
  }

  __onDispatch(action) {
    switch (action.type) {
      case UPDATE_USERNAME:
        this.__state.userName = action.value;
        this.__emitChange();
        break;
      case UPDATE_FONT_SIZE_PREFERENCE:
        this.__state.fontSize = action.value;
        this.__emitChange();
        break;
    }
  }

  getUserPreferences() {
    debugger;
    return this.__state;
  }
}

const userPrefStore = new UserPrefStore(controlPanelDispatcher);

userPrefStore.addListener((state) => {
  render(state);
  localStorage[`preferences`] = JSON.stringify(state);
});

const render = ({userName, fontSize}) => {
  document.getElementById("userName").innerText = userName;
  document.getElementsByClassName("container")[0].style.fontSize =
    fontSize === "small" ? "16px" : "24px";
  document.forms.fontSizeForm.fontSize.value = fontSize;
};

render(userPrefStore.getUserPreferences());
