<template>
  <div class="home">
    <TheNavbar />

    <b-container class="pt-5">

      <h1>Should you BUY? Try below!</h1>

      <b-input-group prepend="Question" size="lg" class="mt-5">
        <b-form-input v-model="title" placeholder="Untitled"></b-form-input>
      </b-input-group>

      <ScoreBar class="mt-3" v-model="score"/>

      <b-row class="mt-3">

        <BaseList title="Pros" :list="pros" @insert="addToList(pros, $event)" />
        <BaseList title="Cons" :list="cons" @insert="addToList(cons, $event)" />

      </b-row>
    </b-container>
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
        { name: "Pro 2", weight: 2 }
      ],
      cons: [
        { name: "Con 2", weight: 2 },
        { name: "Con 1", weight: 2 }
      ]
    };
  },

  computed: {
    score () {
      let prosWeight = this.pros.reduce((total, el) => total += el.weight, 0)
      let consWeight = this.cons.reduce((total, el) => total += el.weight, 0)

      let proScore = prosWeight + this.pros.length
      let conScore = consWeight + this.cons.length

      return (proScore * 100) / (proScore + conScore);
    }
  },

  methods: {
    addToList(array, event) {
      let argument = Object.assign({}, event);
      array.push(argument);
      // console.log(array, argument);
    }
  }
};
</script>
