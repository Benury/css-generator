<template>
  <div class="hello">
  
    <el-form  label-width="80px">
      <el-form-item 
      
      v-for="(item,index) in forms" :key="index"
      :label="item.label">
  
        <el-select v-model="item.value" >
            <el-option
            v-for="it in item.options.items"
            :key="it.value"
            :label="it.text"
            :value="it.value">
          </el-option>
        </el-select>
        <el-popover
        v-if="item.css_type==2"
          placement="bottom"
          width="400"
          trigger="click">
          <el-form :model="css" label-width="80px">
            <el-form-item label="命名">
                  <el-input v-model="css.title"></el-input>
            </el-form-item>
            <el-form-item label="类名">
              <el-input v-model="css.name"></el-input>
            </el-form-item>
            <el-form-item label="属性">
                <el-input v-model="css.key"></el-input>
              </el-form-item>
              <el-form-item label="值">
                  <el-input v-model="css.value"></el-input>
                </el-form-item>
          </el-form>
          <el-button @click="addCss(item,index)">确定</el-button>
          <el-button slot="reference" >添加</el-button>
        </el-popover>
      </el-form-item>

    </el-form>

    <el-button @click="save">保存</el-button>
  </div>
</template>

<script>
export default {
  name: 'div-form',
  props:['id','cls'],
  data () {
    return {
      forms:[],
      css:{
        title:'',
        name:'',
        key:'',
        value:''
      }
    }
  },
  computed: {
  
  },
  watch: {
    'cls':function(){
      var self = this;   
       
      // 添加value
      var arr = []
      for(var i=0; i< self.$parent.cssLib.length; i++){
        var item = _.find(self.cls, function(x){ return x.id == self.$parent.cssLib[i].id})
        if(item){
            var obj = self.$parent.cssLib[i]
            self.$set(obj,'value',item.value)
            // obj['value'] = item.value
            arr.push(obj)
        }
      }
      
      self.forms = arr
    }
  },
  mounted() {
   
  },
  methods: {
    save:function(){
      var self = this;
      // 操作dom对象
      // 操作id 的元素
      var id = self.id
      var index = _.findIndex(self.$parent.dom, function(x){
        return x.id == id;
      })

      // 获取classList
      var arr = _.map(self.forms, function(x){
        return x.value
      })
      
      // self.$parent.dom[index].css = arr

      var cls = arr.join(' ')
      document.getElementById(id).setAttribute("class",cls);

    },
    addCss:function(item,index){
      // 输入
      // 在forms中加入
      var self = this;
      debugger
      var obj = {
        text: self.css.title,
        value: self.css.name
      }
      self.forms[index].options.items.push(obj)
      self.forms[index].value = self.css.name
      // 注入样式
      var cssStr = '.'+ self.css.name+'{ '+self.css.key+' : '+self.css.value+' }'

      document.querySelector('style').sheet.insertRule(cssStr, 1)
    }
  },
}
</script>
