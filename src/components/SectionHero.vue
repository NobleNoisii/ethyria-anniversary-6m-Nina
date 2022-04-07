<template>
  <v-container class="section-grid section-box pb-8 mb-16">
    <!-- <v-row no-gutters class="mb-4">
      <v-col cols="12">
        <h1 class="yellow--text text--darken-3 text-center pa-0 mx-0 my-0">
          <img
            src="../assets/img/section-happy-red.png" height="120"
            alt="Happy 6-Months and Congrats on 300K Nina!" />
        </h1>
      </v-col>
    </v-row> -->
    <v-row no-gutters class="pt-8">
      <v-col cols="6"
        class="text-right white--text text-h5 text--darken-1 pt-4 pr-8 pl-4 hero-text">
        <p>
          It’s been a crazy 6 months of fun with you, Mum. From your freakout in “The Dark Soul” to your NaniKusa moments in The Minecrafts, every moment has been a blast. We of Ninacord are happy to present some of our favorite clips, artworks, and our well wishes in congratulation for making it to 6 months and reaching 300K subscribers!!! We can't wait to watch your future endeavors, Mom, and we’ll make sure to be with you every step of the way!!!
        </p>
      </v-col>
      <v-col cols="6" class="pr-8">
        <iframe title="feature-video"
          width="100%" height="330"
          src="https://www.youtube.com/embed/zsT4xCtrvR4"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowfullscreen>
        </iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: [],
  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.section-grid {
  margin-top:330px;
  max-width:1280px;
  .hero-text {
    white-space: pre-line;
  }
}
</style>
