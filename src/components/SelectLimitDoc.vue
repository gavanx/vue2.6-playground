<template>
  <div>
    <ex-select-limit style="width: 400px;margin: 10px 0;"
      v-model="selectedItem"
      placeholder="默认 limit = 30，实际有10000条数据"
      :options="options"
      :limit="limit"
      @change="handleChange"
    >
    </ex-select-limit>
    <div>
      <span>切换limit：</span>
      <el-select v-model="limit">  
        <el-option v-for="item in limits" :key="item" :label="item" :value="item">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>

const fakeData = () => {
  const options = [];
  for (let i = 1; i <= 10000; i++) {
    options.push({
      value: i,
      label: "label " + i,
      other: 'xxxx',
    });
  }
  return options;
}
export default {
  data() {
    return {
      limit: 30,
      limits: [5, 30, 100, 500, 800, 1000, 2000, 3000, 5000, 10000],
      options: [],
      selectedItem: -1,
    };
  },
  mounted() {
    setTimeout(() => {
      this.options = fakeData()
      setTimeout(() => {
        this.selectedItem = 2
      }, 1000)
    }, 3000)
  },
  methods: {
    filterItemDemox(item, query) {
      console.log("filterItemDemo ", item, query);
      return true;
    },
    handleChange() {
      console.log('handleChange', this.selectedItem)
    }
  },
  watch: {
    selectedItem(value) {
      console.log("selectedItem", value);
    },
  },
};
</script>
<style>
</style>
