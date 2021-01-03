import { createApp } from "vue";
import App from "./App.vue";
import formNew from "./components/formNew.vue";
import formFinal from "./components/formFinal.vue";
import formDate from "./components/formDate.vue";
import formAction from "./components/formAction.vue";
import baseCard from "./components/baseCard.vue";
import theHeader from "./components/theHeader.vue";
import baseButton from "./components/baseButton.vue";

const app = createApp(App);
app.component("form-new", formNew);
app.component("form-date", formDate);
app.component("form-action", formAction);
app.component("form-final", formFinal);
app.component("base-card", baseCard);
app.component("the-header", theHeader);
app.component("base-button", baseButton);
app.mount("#app");
