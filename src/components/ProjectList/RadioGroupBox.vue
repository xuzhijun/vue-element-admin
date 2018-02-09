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
        this.isNowType = this.isNow.split(':')[0]
        this.isDefault = this.isNow.split(':')[1]
      }
    },
    props: {
      isNow: {
        type: String
      },
      texts: {
        type: Array
      }
    }
  }
</script>
