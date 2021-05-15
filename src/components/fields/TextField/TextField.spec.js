import {mount} from "@vue/test-utils";
import TextField from "./TextField.vue";
test('When given value, text box is set', () => {
  const wrapper = mount(TextField);
  const value = wrapper.find('input').element.value;

  
});