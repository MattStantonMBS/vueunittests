<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-text-field
        :value="value"
        outlined
       />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TextField",
  props: {
    value: null,
  }
}
</script>