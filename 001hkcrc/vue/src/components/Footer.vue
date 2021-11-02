<template>
  <div style = "height:100%; border-bottom: 1px solid red; display:flex">
    <div id = "camera">
      <img src="../assets/img/camera.jpg"  alt="../assets/img/camera1.jpg">
    </div>

    <div id = "zoonin">
      <img src="../assets/img/zoonin.jpg" alt="12" style="height:100%; width:100%">
    </div>

  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed:{
    getNavImgUrl:function(){
      return '../'+'assets/img/camera.jpg'
    }
  },
  data(){
    return{
      image1:"../assets/img/camera.jpg"
    }
  }
}
</script>

<style scoped>
  #camera{
    margin-left: 12%;
    margin-top: 0.15%;
    margin-bottom: 0.15%;
    float: left;
    height: 99.8%;
    width:30%
  }
  #zoonin{
    margin-left: 13%;
    margin-top: 0.15%;
    margin-bottom: 0.15%;
    float: right;
    height: 99.6%;
    width:30%
  }
</style>
