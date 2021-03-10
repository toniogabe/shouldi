<template>
  <b-row align-h="center" class="my-5">
    <b-input-group
      ref="dilema_input"
      size="lg"
      class="mt-3 w-75 append-inside"
      :class="{ 'append-inside-focus': focused }"
    >
      <b-input-group-prepend is-text>
        <b-icon icon="pencil-square"></b-icon>
      </b-input-group-prepend>

      <b-form-input
        v-model="question"
        :maxlength="maxlength"
        :placeholder="placeholder"
        @focus="focused = true"
        @blur="focused = false"
      ></b-form-input>

      <b-input-group-append is-text>
        <small class="text-muted text-monospace">
          {{ `${question.length}/${maxlength}` }}
        </small>
      </b-input-group-append>
    </b-input-group>
  </b-row>
</template>

<script>
export default {
  name: "TheQuestionInput",
  props: {
    placeholder: {
      type: String,
      default: "Ex.: Should I learn Java?"
    },
    maxlength: {
      type: [Number, String],
      default: 50
    }
  },

  data() {
    return {
      focused: false,
      question: ""
    };
  }
};
</script>
