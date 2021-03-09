<template>
  <b-col>

      <h4 class="mb-0"><b-icon icon="list-ul" scale="0.9"></b-icon> {{ title }}</h4>

      <b-input-group class="my-2 px-2">

        <b-form-input
          v-model="argument.name"
          placeholder="Add argument"
          @keyup.enter="addItem()"
        ></b-form-input>

        <template #append>
          <b-dropdown variant="outline-primary" toggle-class="text-decoration-none" no-caret>

            <template #button-content>
              <b-icon v-for="i in argument.weight" :key="i" icon="lightning-fill"></b-icon>
              <!-- <b-icon icon="lightning-fill"></b-icon> -->
            </template>

            <b-dropdown-group header="Importance" id="dropdown-header-label">

              <b-dropdown-item-button @click="argument.weight = 1">
                <b-icon icon="lightning-fill"></b-icon>
              </b-dropdown-item-button>
              <b-dropdown-item-button @click="argument.weight = 2">
                <b-icon v-for="i in 2" :key="i" icon="lightning-fill"></b-icon>
              </b-dropdown-item-button>
              <b-dropdown-item-button @click="argument.weight = 3">
                <b-icon v-for="i in 3" :key="i" icon="lightning-fill"></b-icon>
              </b-dropdown-item-button>

            </b-dropdown-group>
          </b-dropdown>

          <b-button variant="primary" @click="addItem()" :disabled="!argument.name">
            <b-icon icon="plus" scale="1.3"></b-icon>
          </b-button>

        </template>
      </b-input-group>

      <b-list-group v-if="list.length" flush>
        <b-list-group-item
          v-for="(item, idx) in list"
          :key="idx"
          class="d-flex justify-content-between"
          button
          @mouseover="selected = item"
          @mouseleave="selected = undefined"
        >
          {{ item.name }}
          <div>
            <b-icon v-for="i in item.weight" :key="i" icon="lightning-fill"></b-icon>
            <b-icon
              v-show="item == selected"
              icon="x-square"
              class="ml-3 rounded-circle"
              scale="1.3"
              variant="danger"
              @click="removeItem(idx)"
            ></b-icon>
          </div>
          <!-- <b-icon icon="trash"></b-icon> -->
        </b-list-group-item>
      </b-list-group>

      <b-card v-else> No {{ title }} yet!</b-card>

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
      selected: undefined,
      argument: Object.assign({}, baseArg),
      options: [
        { text: "Less important", value: 1 },
        { html: '<b>Normal</b>', value: 2 },
        { text: "Very important", value: 3 }
      ]
    };
  },

  methods: {
    addItem () {
      this.$emit("insert", this.argument);
      this.argument = Object.assign({}, baseArg);
    },

    removeItem (idx) { this.$emit("remove", idx); }
  }
};
</script>
