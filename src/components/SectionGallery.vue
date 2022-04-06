<template>
  <v-container class="section-grid section-box">
    <v-row no-gutters class="mb-4">
      <v-col cols="12">
        <h1 class="yellow--text text--darken-3 text-center pa-0 ma-0">
          <img
            src="../assets/img/section-gallery.png" height="80"
            alt="Art Gallery" />
        </h1>
      </v-col>
    </v-row>
    <v-row no-gutters class="">
      <v-col>
        <div v-masonry="'gallery'" transition-duration="0.3s" item-selector=".card" stagger="0s">
          <div v-masonry-tile class="card">
            <img src="@/assets/art/6months-01-colesparks318.jpg" alt="colesparks318" />
            <div class="artist white--text text-center">Colesparks-318</div>
          </div>
          <div v-masonry-tile class="card">
            <img src="@/assets/art/6months-02-seviradi.png" alt="seviradi" />
            <div class="artist white--text text-center">Seviradi</div>
          </div>
          <div v-masonry-tile class="card">
            <img src="@/assets/art/6months-03-voldox.jpg" alt="voldox" />
            <div class="artist white--text text-center">Voldox</div>
          </div>
          <div v-masonry-tile class="card">
            <img src="@/assets/art/6months-04-voldox.png" alt="voldox" />
            <div class="artist white--text text-center">Voldox</div>
          </div>
          <div v-masonry-tile class="card">
            <img src="@/assets/art/6months-05-soya.png" alt="soya" />
            <div class="artist white--text text-center">soya</div>
          </div>
          <div v-masonry-tile class="card">
            <img src="@/assets/art/6months-06-leef.png" alt="leef" />
            <div class="artist white--text text-center">Leef</div>
          </div>
          <div v-masonry-tile class="card">
            <img src="@/assets/art/6months-07-komet.png" alt="komet" />
            <div class="artist white--text text-center">Komet</div>
          </div>
          <div v-masonry-tile class="card">
            <img src="@/assets/art/6months-08-soya.png" alt="soya" />
            <div class="artist white--text text-center">soya</div>
          </div>
          <div v-masonry-tile class="card">
            <img src="@/assets/art/6months-09-komet.png" alt="komet" />
            <div class="artist white--text text-center">Komet</div>
          </div>
        </div>
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
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => { this.$redrawVueMasonry('gallery'); }, 1000);
      setTimeout(() => { this.$redrawVueMasonry('gallery'); }, 5000);
    });
  },
};
</script>

<style lang="scss" scoped>
.card {
  background:#1a1a1a;
  position:relative;
  min-height:100px;
  width:24%;
  margin:10px 0.5%;
  padding:10px 10px 24px 10px;
  border:2px solid #0f0f0f;
  img {
    width:100%;
  }
  .artist {
    position:absolute;
    bottom:0;
    left:2px;
    right:2px;
    height:30px;
    line-height:30px;
    font-size:20px;
  }
}

@media only screen and (max-width: 1800px) {
  .card {
    width:32%;
    margin:10px 0.5%;
  }
}
@media only screen and (max-width: 1264px) {
  .card {
    width:48%;
    margin:10px 1%;
  }
}
@media only screen and (max-width: 700px) {
  .card {
    width:96%;
    margin:10px 2%;
  }
}
</style>
