<template>
  <div class="home">
    <TheNavbar />
    <b-button>Adicionar</b-button>
    <QuestionsList />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import QuestionsList from "@/components/QuestionsList";

export default {
  name: "Home",
  components: {
    QuestionsList,
    TheNavbar
  }
};
</script>
