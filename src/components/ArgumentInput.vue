<template>
  <div>
    <b-input-group class="mt-3 mb-1">
      <b-form-input
        v-model="argument.name"
        :placeholder="placeholder"
        :maxlength="maxlength"
        @keyup.enter="addItem()"
        @focus="focused = true"
        @blur="focused = false"
      ></b-form-input>

      <template #append>
        <b-dropdown
          variant="outline-primary"
          toggle-class="text-decoration-none"
          no-caret
        >
          <template #button-content>
            <b-icon
              v-for="i in argument.weight"
              :key="i"
              icon="lightning-fill"
            ></b-icon>
          </template>

          <b-dropdown-group header="Importance" id="dropdown-header-label">
            <b-dropdown-item-button
              @click="argument.weight = 1"
              v-b-popover.hover="'Low'"
            >
              <b-icon icon="lightning-fill"></b-icon>
            </b-dropdown-item-button>

            <b-dropdown-item-button
              v-b-popover.hover="'Normal'"
              @click="argument.weight = 2"
            >
              <b-icon v-for="i in 2" :key="i" icon="lightning-fill"></b-icon>
            </b-dropdown-item-button>

            <b-dropdown-item-button
              v-b-popover.hover="'High'"
              @click="argument.weight = 3"
            >
              <b-icon v-for="i in 3" :key="i" icon="lightning-fill"></b-icon>
            </b-dropdown-item-button>
          </b-dropdown-group>
        </b-dropdown>

        <b-button
          variant="primary"
          :disabled="!argument.name"
          @click="addItem()"
        >
          <b-icon icon="plus" scale="1.3"></b-icon>
        </b-button>
      </template>
    </b-input-group>

    <b-form-text
      v-if="focused"
      class="d-flex justify-content-between text-muted text-monospace"
    >
      <span>
        <b-icon icon="lightning-fill"></b-icon> = Importance of the argument
      </span>
      <span>{{ `${argument.name.length}/${maxlength}` }}</span>
    </b-form-text>
  </div>
</template>

<script>
import baseInputPropsMixin from "@/mixins/baseInputPropsMixin";

const baseArg = { name: "", weight: 2 };

export default {
  name: "ArgumentInput",
  mixins: [baseInputPropsMixin],

  data() {
    return {
      argument: Object.assign({}, baseArg),
      focused: false,
      options: [
        { text: "Less important", value: 1 },
        { html: "<b>Normal</b>", value: 2 },
        { text: "Very important", value: 3 }
      ]
    };
  },

  methods: {
    addItem() {
      this.$emit("insert", this.argument);
      this.argument = Object.assign({}, baseArg);
    }
  }
};
</script>
