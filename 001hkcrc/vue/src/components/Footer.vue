<template>
  <div style = "height:100%; border-bottom: 1px solid red; display:flex">
    <div id = "camera">
      <img src="../assets/img/camera.jpg" alt="" style="height:100%; width:100%">
    </div>

    <div id = "zoonin">
      <img src="../assets/img/zoonin.jpg" alt="" style="height:100%; width:100%">
    </div>

  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  #camera{
    margin-left: 13%;
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
    float: left;
    height: 99.6%;
    width:30%
  }
</style>
