<template>
  <div id="page-home" class="pt-2 pb-4">
    <div class="header"></div>
    <div class="section mb-4">
      <SectionHero/>
    </div>
    <div class="section mb-12">
      <SectionImage/>
    </div>
    <div class="section mb-12">
      <SectionTimeline/>
    </div>
    <div class="section mb-12">
      <SectionMessages/>
    </div>
    <div class="section mb-12">
      <SectionGallery/>
    </div>
    <div class="section mb-12">
      <SectionCredits/>
    </div>
  </div>
</template>

<script>
import SectionHero from '@/components/SectionHero.vue';
import SectionImage from '@/components/SectionImage.vue';
import SectionTimeline from '@/components/SectionTimeline.vue';
import SectionMessages from '@/components/SectionMessages.vue';
import SectionGallery from '@/components/SectionGallery.vue';
import SectionCredits from '@/components/SectionCredits.vue';

export default {
  name: 'HomeView',
  components: {
    SectionHero,
    SectionImage,
    SectionTimeline,
    SectionMessages,
    SectionGallery,
    SectionCredits,
  },
};
</script>

<style lang="scss" scoped>
#page-home {
  background-color:#0a0a0a;
  background-image:url('../assets/img/background.png');
  background-repeat: repeat;
  min-height:100vh;
}
.header {
  background-image:url('../assets/img/header.png');
  background-position:center -100px;
  background-repeat:no-repeat;
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:2;
}
.section {
  position:relative;
  .section-grid {
    min-height:400px;
    &.section-box {
      position:relative;
      background:#000;
      border:3px solid #ff0000;
      &:before {
        content:"";
        display:block;
        position:absolute;
        top:4px;
        left:4px;
        right:4px;
        bottom:4px;
        border:1px solid #ffdd66;
      }
      &:after {
        content:"";
        display:block;
        position:absolute;
        height:60px;
        left:0px;
        right:0px;
        bottom:-40px;
        background:
          url('../assets/img/bell-l.png') bottom left no-repeat,
          url('../assets/img/bell-r.png') bottom right no-repeat;
      }
    }
  }
  z-index:1;
}
</style>
