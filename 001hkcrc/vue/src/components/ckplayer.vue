<template>
  <div className="is-full">
    <div id="video" className="video-content"></div>
  </div>
</template>

<script>
const CKplayer = window.ckplayer
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      player: null,
      videoObject: {
        container: '.video-content', // 容器的ID或className
        variable: 'player', // 播放函数名称
        autoplay: true, // 是否自动播放
        live: true // 是否是直播视频 true = 直播，false = 点播}
      }
    }
  },
  computed: {},
  watch: {},
  beforeCreate() {
  },
  created() {
  },
  beforeMount() {
  },
  mounted() {
    var videoObject = {
      ...this.videoObject,
      video: 'rtmp://58.200.131.2:1935/livetv/hunantv', // 在线可用的rtmp源
      container: '#video'
    }
    this.player = new CKplayer(videoObject)
  },
  beforeUpdate() {
  },
  updated() {
  },
  activated() {
  },
  deactivated() {
  },
  beforeDestroy() {
  },
  destroyed() {
  },
  methods: {}
}
</script>

<style>
.video-content, .is-full {
  height: 100%;
  width:100%;
}
</style>
