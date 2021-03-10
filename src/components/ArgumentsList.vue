<template>
  <b-col>
    <h4 class="mb-0">
      <b-icon icon="list-ul" scale="0.9"></b-icon> {{ title }}
    </h4>

    <ArgumentInput @insert="$emit('insert', $event)" />

    <base-list
      v-if="value.length"
      v-model="value"
      @remove="$emit('remove', $event)"
    ></base-list>

    <b-card v-else class="mt-3 empty-list">
      <b-icon icon="inbox" scale="1.5" animation="fade"></b-icon>
      <span class="ml-3">No items yet!</span>
    </b-card>
  </b-col>
</template>

<script>
import ArgumentInput from "./ArgumentInput";
import BaseList from "./BaseList";

export default {
  name: "ArgumentsList",
  props: {
    value: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },

  components: { ArgumentInput, BaseList }
};
</script>
