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
  width:100%;
  height:900px;
  background-image:url('../assets/img/banner.png');
  background-position:top center;
  background-repeat:no-repeat;
  background-size:900px;
  position:absolute;
}
.section {
  position:relative;
  .section-grid {
    min-height:400px;
    &.section-box {
      background-color:rgb(0, 0, 0, 0.7);
      border-right:4px solid #ff0000;
      border-bottom:4px solid #ff0000;
    }
  }
}
</style>
