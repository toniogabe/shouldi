<template>
  <b-input-group
  ref="dilema_input"
  size="lg"
  class="my-5 append-inside"
  :class="{ 'append-inside-focus': focused }"
  >
    <template #prepend>
      <b-input-group-text>
        <b-icon icon="pencil-square"></b-icon>
      </b-input-group-text>
    </template>
    <b-form-input
      v-model="value"
      :placeholder="placeholder"
      @focus="focused = true"
      @blur="focused = false"
    ></b-form-input>
  </b-input-group>
</template>

<script>
export default {
  name: "TheQuestionInput",
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: 'Ex.: Should I learn Java?'
    }
  },

  data () {
    return {
      focused: false,
    }
  }
}
</script>