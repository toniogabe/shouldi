<template>
  <b-list-group class="mt-3 mb-1">
    <b-list-group-item
      v-for="(item, idx) in value"
      :key="idx"
      class="d-flex justify-content-between"
      @mouseover="selected = item"
      @mouseleave="selected = undefined"
    >
      {{ item.name }}
      <div>
        <b-icon
          v-for="i in item.weight"
          :key="i"
          icon="lightning-fill"
        ></b-icon>
        <b-icon
          v-show="item == selected"
          icon="x"
          class="ml-3 rounded-circle"
          scale="1.5"
          variant="danger"
          @click="$emit('remove', idx)"
        ></b-icon>
      </div>
      <!-- <b-icon icon="trash"></b-icon> -->
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: "BaseList",
  props: {
    value: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      selected: undefined
    };
  }
};
</script>
