<template>
  <div class="home">
    <TheNavbar />
    <h1>Small intro...</h1>

    <b-input-group prepend="Question">
      <b-form-input v-model="title"></b-form-input>
    </b-input-group>

    <ScoreBar />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import ScoreBar from "@/components/ScoreBar";

export default {
  name: "Home",
  components: { TheNavbar, ScoreBar },

  data() {
    return {
      title: "Untitled"
    };
  }
};
</script>
