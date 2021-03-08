<template>
  <div>
    <b-navbar toggleable="lg" variant="transparent" class="mx-5">
      <b-navbar-brand href="#">
        <strong>SHOULDI?</strong>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
          <b-nav-item href="#">Item 1</b-nav-item>
          <b-nav-item href="#">Item 2</b-nav-item>
        </b-navbar-nav> -->

        <!-- Right Aligned -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">About</b-nav-item>
          <b-nav-item href="#">GitHub</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "TheNavbar"
};
</script>
