<template>
  <v-container class="section-grid">
    <v-row no-gutters>
      <v-col cols="12">
        <h1 class="yellow--text text--darken-3 text-center pa-0 ma-0">
          <img
            src="../assets/img/section-messages.png" height="80"
            alt="Message Cards" />
        </h1>
        <h2 class="white--text text-center">
          Message form is still open for submissions!
          <a href="https://forms.gle/f3YvSgo4azDDgzeCA" target="_blank">
            https://forms.gle/f3YvSgo4azDDgzeCA
          </a>
        </h2>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <div v-masonry="'bdaycards'" transition-duration="0.3s" item-selector=".card" stagger="0s">
          <div
            v-masonry-tile
            :class="[ 'card', `card-style-${Math.ceil(Math.random() * 6)}`]"
            v-for="(item, ix) in cards" :key="`card-${ix}`">
            <div class="card-name text-h6 pr-12 py-2">{{item.name}}</div>
            <div class="card-text text-body-1 pr-4 pb-2">{{item.message}}</div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import twemoji from 'twemoji';

export default {
  data: () => ({
    source: 'https://vtubertools.sfo3.digitaloceanspaces.com/tribute/millie6m.json',
    cards: [],
  }),
  mounted() {
    // Load data
    (async () => {
      const fetchSource = await axios.get(this.source).catch(() => null);
      const data = fetchSource && fetchSource.data ? fetchSource.data : {};
      this.cards = Object.values(data.messages)
        .sort((a, b) => a.time - b.time);
      this.$nextTick(() => {
        twemoji.parse(document.body);
        this.$redrawVueMasonry('bdaycards');
        setTimeout(() => {
          this.$redrawVueMasonry('bdaycards');
        }, 1200);
      });
    })();
  },
};
</script>

<style lang="scss" scoped>
.card {
  // background:#505050;
  position:relative;
  padding:10px;
  min-height:100px;
  width:24%;
  margin:10px 0.5%;
  border-radius:10px;
  background-repeat: repeat-y;
  background-size: contain;
  .card-name {
    color:#ffaaaa;
    font-weight:bold;
    text-shadow:
      0px 0px 3px #000;
  }
  .card-text {
    white-space: pre-line;
    font-weight:bold;
    padding:5px 10px;
    background-color:rgba(60, 0, 0, 0.8);
    border-radius:10px;
    color:#fff;
    text-shadow:
      0px 0px 3px #000,
      0px 0px 3px #000;
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

<style lang="scss">
.card-text {
  img {
    height:1.4rem;
  }
}
</style>
