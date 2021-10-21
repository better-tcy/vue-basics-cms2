<template>
  <div>
    <!-- changeUpdateRowData：监听点击修改按钮 所触发的事件
      changeDelRowData：监听点击删除按钮 所触发的事件
      changeToDetals：监听点击查看详情按钮 所触发的事件
      以上事件函数 都可以接收所操作行的全部数据
      changeSelection：表格多选改变 所触发的事件 事件函数可接收 多选的数据
      changePagination：pageNum | pageSize改变所触发的事件 事件函数可接收 最新的pageSize pageNum -->
    <my-table
      :tableData="tableData"
      :columnData="columnData"
      @changeUpdateRowData="setUpdateRowData"
      @changeSelection="getSelectionArr"
      @changePagination="pagination"
      :total="10"
    >
      <!-- 插槽部分 如果未写插槽 则默认显示修改 删除 查看详情按钮
       rowData是所操作行的全部数据 -->
      <div slot-scope="rowData">
        <el-button @click="start(rowData)">启用</el-button>
      </div>
    </my-table>

    <!-- formConfig：表单配置
      parentFormData：传给组件的默认数据
      changeBtnClick：监听组件内默认按钮的点击 事件函数可接收form表单所有数据 -->
    <my-form
      :formConfig="formConfig"
      :parentFormData="formData"
      @changeBtnClick="btnClick"
    >
      <!-- formItem插槽：使用的功能 组件中未集成 可使用formItem插槽 -->
      <template slot="formItem">
        <el-form-item label="上传图片">
          如：图片上传 逻辑部分就在本页面中处理即可
        </el-form-item>
      </template>

      <!-- btn插槽：表单中其他按钮 -->
      <template slot="btn">
        <el-button type="danger">其他按钮</el-button>
      </template>
    </my-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 后端返回的表格数据
      tableData: [
        {
          id: 1,
          date: "2016-05-03",
          name: "tom",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 2,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 3,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 4,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 5,
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 6,
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      // 每一列对应的label和prop 数组的length对应着表格列数
      columnData: [
        {
          label: "姓名",
          prop: "name",
        },
        {
          label: "地址",
          prop: "address",
        },
      ],

      // form表单默认数据
      formData: {
        fruitId: 1,
        // 时间范围默认值为数组,其他为字符串 例如默认值为'2021-10-01'
        date: ["2021-02-06 12:00:00", "2021-03-06 12:00:00"],
        checkboxVal: ["1", "2"],
      },

      // 生成表单的配置项
      formConfig: {
        formItemWidth: "500px", // 表单中每项元素宽度 默认500px
        labelPosition: "right", // 每项元素的label对应的位置 可选['left','right','top'] 默认为'right'
        labelWidth: "100px", // 每项元素的label宽度 默认150px
        btnText: "搜索", // 按钮文字 默认'搜索'
        isRowLayout: false, // 表单中所有元素是否横向布局 默认false
        // form表单每项的配置
        formArr: [
          {
            label: "姓名",
            type: "input",
            field: "name", // 传给后端的字段名
            placeholder: "请输入用户名",
            rules: [
              { required: true, message: "请输入用户名", trigger: "blur" },
            ], //检验
          },
          {
            label: "密码",
            type: "password",
            field: "password",
            placeholder: "请输入密码",
          },
          {
            label: "备注",
            type: "textarea",
            field: "remark",
            placeholder: "请输入文本域内容",
            row: 3, // textarea显示的行数 默认2行
          },
          {
            label: "选择水果",
            type: "select",
            field: "fruitId",
            placeholder: "请选择",
            options: [
              {
                value: 1,
                label: "香蕉",
              },
              {
                value: 2,
                label: "苹果",
              },
            ],
          },

          {
            label: "日期",
            type: "date-time-picker",
            field: "date",
            /*
             可选值:date 选择日
                   week 选择周
                   month 选择月
                   year 选择年
                   daterange 选择日期范围
                   monthrange 选择月份范围
                   datetime 选择日期时间
                   datetimerange 选择日期时间范围
            */
            // 注:formData中日期的默认值必须要和dateTimepickerType及format配置一一对应
            dateTimepickerType: "datetimerange",
            format: "yyyy-MM-dd HH:mm:ss", // 绑定值的格式
            placeholder: "选择日期",
          },

          {
            label: "选择性别",
            type: "radio",
            field: "radioVal",
            options: [
              {
                label: "男生",
                value: "1",
              },
              {
                label: "女生",
                value: "2",
              },
            ],
          },
          {
            label: "选择汽车品牌",
            type: "checkbox",
            field: "checkboxVal",
            options: [
              {
                label: "红旗",
                value: "1",
              },
              {
                label: "吉利",
                value: "2",
              },
              {
                label: "长城",
                value: "3",
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    setUpdateRowData(rowData) {
      console.log(rowData);
    },
    start(rowData) {
      console.log(rowData);
    },
    getSelectionArr(selectionArr) {
      console.log(selectionArr);
    },
    pagination(paginationObj) {
      console.log(paginationObj);
    },
  },
};
</script>

<style scoped lang="scss">
</style>