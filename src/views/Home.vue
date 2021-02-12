<template>
  <div class="home">
    <TheNavbar />
    <h1>Small intro...</h1>

    <b-input-group prepend="Question">
      <b-form-input v-model="title" placeholder="Untitled"></b-form-input>
    </b-input-group>

    <ScoreBar />

    <BaseList title="Pros" :list="pros" @insert="addToList(pros, $event)" />
    <BaseList title="Cons" :list="cons" @insert="addToList(cons, $event)" />

  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import ScoreBar from "@/components/ScoreBar";
import BaseList from "@/components/BaseList";

export default {
  name: "Home",
  components: { TheNavbar, ScoreBar, BaseList },

  data() {
    return {
      title: undefined,
      pros: [
        { name: "Pro 1", weight: 5 },
        { name: "Pro 2", weight: 2 },
      ],
      cons: [
        { name: "Con 1", weight: 2 },
        { name: "Con 2", weight: 2 },
      ]
    };
  },

  methods: {
    addToList(array, event) {
      let argument = Object.assign({}, event);
      array.push(argument);
      console.log(array, argument);
    }
  }
};
</script>
