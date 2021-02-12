<template>
  <div>
    <h1>{{ title }}</h1>
    <b-list-group-item v-for="(item, idx) in list" :key="idx">
      {{ item.name }}
    </b-list-group-item>
    <b-input-group>
      <b-form-input
        v-model="argument.name"
        placeholder="New argument"
      ></b-form-input>
      <b-input-group-append>
        <b-input-group :append="argument.weight">
          <b-form-input
            v-model="argument.weight"
            type="range"
            min="1"
            max="3"
          ></b-form-input>
        </b-input-group>
        <b-button variant="primary" @click="addItem()" @keyup.enter="addItem()">
          Add
        </b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
const baseArg = { name: "", weight: 3 };

export default {
  name: "BaseList",
  props: {
    title: String,
    list: Array
  },

  data() {
    return {
      argument: Object.assign({}, baseArg)
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
