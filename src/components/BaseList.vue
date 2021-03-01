<template>
  <b-col>
    <b-card :title="title">

      <b-input-group class="mb-2">
        <b-form-input
          v-model="argument.name"
          placeholder="New argument"
          @keyup.enter="addItem()"
        ></b-form-input>

        <b-form-select
          v-model="argument.weight"
          :options="options"
        ></b-form-select>

        <b-input-group-append>
          <!-- <b-input-group :append="argument.weight">
            <b-form-input
              v-model="argument.weight"
              type="range"
              min="1"
              max="3"
              number
            ></b-form-input>
          </b-input-group> -->
          <b-button variant="primary" @click="addItem()">
            <b-icon-plus></b-icon-plus>
          </b-button>
        </b-input-group-append>

      </b-input-group>

      <b-list-group>
        <b-list-group-item v-for="(item, idx) in list" :key="idx">
          {{ item.name }}
        </b-list-group-item>
      </b-list-group>

    </b-card>
  </b-col>
</template>

<script>
const baseArg = { name: "", weight: 2 };

export default {
  name: "BaseList",
  props: {
    title: String,
    list: Array
  },

  data() {
    return {
      argument: Object.assign({}, baseArg),
      options: [
        { text: "Low priority", value: 1 },
        { html: '<b-icon icon="credit-card" aria-hidden="true"></b-icon>', value: 2 },
        { text: "Hight priority", value: 3 }
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
