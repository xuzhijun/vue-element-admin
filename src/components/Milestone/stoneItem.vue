<template>
  <div :key="stone.id" class="stone-item" :class="stone.type">
    <div class="stone-name">
      <span>{{stone.name}}</span>
    </div>
    <svg class="icon-triangle" width="29px" height="26px" viewBox="0 0 29 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <path d="M12.7111456,19.4222912 L4,2 L25,2 L16.2888544,19.4222912 C15.7948759,20.4102482 14.5935298,20.8106969 13.6055728,20.3167184 C13.218518,20.123191 12.904673,19.809346 12.7111456,19.4222912 Z" id="path-1"></path>
        <filter x="-33.3%" y="-27.0%" width="166.7%" height="175.6%" filterUnits="objectBoundingBox" id="filter-2">
          <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
          <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.263700181 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
      </defs>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Combined-Shape">
          <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
          <use :fill="stoneColor" fill-rule="evenodd" xlink:href="#path-1"></use>
          <path :stroke="stoneColor" stroke-width="1" d="M24.190983,2.5 L4.80901699,2.5 L13.1583592,19.1986844 C13.3035048,19.4889755 13.5388885,19.7243593 13.8291796,19.8695048 C14.5701474,20.2399887 15.4711569,19.9396522 15.8416408,19.1986844 L24.190983,2.5 Z"></path>
        </g>
      </g>
    </svg>
    <i class="icon-point"></i>
    <div class="stone-date">{{stone.date}}</div>
  </div>
</template>
<script>
export default {
  props: ['stone'],
  computed: {
    stoneColor() {
      let color
      switch (this.stone.type) {
        case 'primary':
          color = '#6393e4'
          break
        default:
          color = '#F0F0F0'
          break
      }
      return color
    }
  }
}
</script>
<style lang="scss" scoped>
.stone-item {
  margin-bottom: 40px;
  padding: 0 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #cecece;
  .stone-name {
    background-color: #f0f0f0;
    border: 1px solid #f0f0f0;
    box-shadow: rgba(0, 0, 0, 0.26) 0 2px 4px 0;
  }
  .icon-point {
    background-color: rgba(136, 136, 136, 0.92);
    border: 4px solid #d8d8d8;
  }
  &.primary {
    .stone-name {
      background-color: #6393e4;
      border: 1px solid #6393e4;
      box-shadow: rgba(24, 120, 138, 0.26) 0 2px 4px 0;
      color: #fff;
    }
    .icon-triangle {
      fill: #6393e4;
    }
    .icon-point {
      background-color: #5e8fe2;
      border: 4px solid rgba($color: #7dadff, $alpha: 0.87);
    }
  }
}
.stone-name {
  padding: 10px;
  width: 140px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}
.icon-triangle {
  margin-top: -2px;
}
.icon-point {
  display: block;
  width: 22px;
  height: 22px;
  font-size: 0;
  line-height: 0;
  border-radius: 14px;
  position: absolute;
  bottom: -11px;
}
.stone-date {
  position: absolute;
  bottom: -40px;
}
</style>
