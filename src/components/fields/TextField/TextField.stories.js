import TextField from "./TextField";

export default {
  component: TextField,
  title: "Fields/TextField"
};

export const Field = () => ({
  components: { TextField },
  template: '<TextField />',
});