<template>
  <el-radio-group size="mini" v-model="isDefault">
    <el-radio-button v-for="(text, index) in texts" :label="text" :key="index"></el-radio-button>
    }
  </el-radio-group>
</template>

<script>
  export default {
    name: 'radioGroupBox',
    data() {
      return {
        isDefault: '',
        isNowType: ''
      }
    },
    watch: {
      isDefault() {
        this.$emit('getClick', this.isNowType + ':' + this.isDefault)
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        this.getText()
      })
    },
    methods: {
      getText() {
        const isNowValue = this.isNow.split(':')[1]
        this.isNowType = this.isNow.split(':')[0]
        this.isDefault = isNowValue !== 'time' ? '全部' : '当前项目'
      }
    },
    props: {
      isNow: {
        type: String
      },
      aaaa: {
        type: String
      },
      texts: {
        type: Array
      }
    }
  }
</script>
