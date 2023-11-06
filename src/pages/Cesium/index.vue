
<template>
  <div class="cesium">
    <div id="cesium-viewer" class="cesium-viewer"/>
    <div class="test-btn">
      <div @click="handleClick1">正北1</div>
      <div @click="handleClick2">正北2</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, } from 'vue';
import * as Cesium from 'cesium';

let viewer: any = null;

const init = () => {
  Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmNDVhMjQ0Yi05MDg4LTRlNDYtYTIxMi00YmI4ZWYxOWMyNTgiLCJpZCI6MTQ5MzYwLCJpYXQiOjE2ODc3ODQ0OTh9.KlhT_LCnsEtYyawpEmJ_wx44_qTUbgze-SxGMRavbAM";
  viewer = new Cesium.Viewer('cesium-viewer', {
    homeButton: true,
    sceneModePicker: false,
    baseLayerPicker: false, // 影像切换
    animation: false, // 是否显示动画控件
    infoBox: false, // 是否显示点击要素之后显示的信息
    selectionIndicator: false, // 要素选中框
    geocoder: false, // 是否显示地名查找控件
    timeline: false, // 是否显示时间线控件
    fullscreenButton: false,
    shouldAnimate: false,
    navigationHelpButton: false, // 是否显示帮助信息控件
  });
        
  var tdtImageryProvider2 = new Cesium.UrlTemplateImageryProvider({
    url: 'http://{s}.tianditu.com/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk=76b5fe86dbef822cda5039a2935a0266',
    subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
    maximumLevel: 18,
    minimumLevel: 1,
    credit: 'Tianditu'
  });
  viewer.imageryLayers.addImageryProvider(tdtImageryProvider2);

  var tdtImageryProvider = new Cesium.UrlTemplateImageryProvider({
    url: 'http://{s}.tianditu.com/DataServer?T=cia_w&X={x}&Y={y}&L={z}&tk=76b5fe86dbef822cda5039a2935a0266',
    subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
    maximumLevel: 18,
    minimumLevel: 1,
    credit: 'Tianditu'
  });
  viewer.imageryLayers.addImageryProvider(tdtImageryProvider);
}

const handleClick1 = () => {
  // 获取当前相机的朝向  
  var heading = viewer.camera.heading;  
  
  // 将相机的朝向设置为正北方向  
  heading = Cesium.Math.toRadians(0); // 正北朝上  
  viewer.camera.setView({  
    orientation: {  
      heading: heading, // 朝向角度（弧度）  
      pitch: viewer.camera.pitch, // 俯仰角度（弧度）  
      roll: viewer.camera.roll // 翻滚角度（弧度）  
    }  
  });
}

const handleClick2 = () => {
  const cartographic = Cesium.Ellipsoid.WGS84.cartesianToCartographic(viewer.camera.position);
  const longitude = Cesium.Math.toDegrees(cartographic.longitude);
  const latitude = Cesium.Math.toDegrees(cartographic.latitude);
  const altitude = cartographic.height;

  viewer.camera.setView({  
    destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, altitude), // 纬度，经度，高度（以米为单位）  
    orientation: {  
        heading: Cesium.Math.toRadians(0), // 朝向北极，即正北朝上  
        pitch: Cesium.Math.toRadians(-90), // 俯仰角设为-90度，也就是面向正下方  
        roll: 0 // 翻滚角设为0度  
    }  
  });
}

onMounted(() => {
  init();
})
</script>

<style lang="scss" scoped>
@import url(@/styles/widgets.css);

.cesium {
  width: 100%;
  height: 100%;
  font-size: .16rem;

  .cesium-viewer {
    width: 100%;
    height: 100%;
  }

  .test-btn {
    position: absolute;
    left: .5rem;
    top: .5rem;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    gap: .2rem;
  }
}
</style>