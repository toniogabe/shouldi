<template>
  <div>
    <h1>Lista de questões</h1>
    <BaseList :list="questionsList" />
  </div>
</template>

<script>
import BaseList from "./BaseList.vue";
import seeder from "@/assets/seeder.json";

export default {
  name: "QuestionsList",
  components: { BaseList },

  data() {
    return {
      questionsList: seeder
    };
  }
};
</script>
