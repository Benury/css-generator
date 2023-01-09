<template>
  <div>
    <span>I have change all file for the first change</span>
  </div>
</template>

<script>
import divForm from './components/div.vue'

export default {
  name: 'App',
  data(){
    return {
      cssLib:[
        {id:'2', css_type:0, label: 'position', type: 'select', options:{
            items: [
                {text:'无', value:''},
                {text:'relative',value:'rel'},
                {text:'absolute',value:'abs'}
            ]
        }},
        {id:'11', css_type:1, label:'background', type: 'select', options:{
            items: [
                {text:'wu', value:''},
                {text:'主色调', value:'bg-main'},
                {text:'次色调', value:'bg-sub'}

            ]
        }},
        {id:'21', css_type:2, label:'width', type:'select', options:{
          items:[
              {text:'wu',key:'', value:''},
              {text:'200px',value:'width_200px'}
          ]
        }},
        {id:'22', css_type:2, label:'height', type:'select', options:{
          items:[
              {text:'wu',key:'', value:''},
              {text:'height_100px',value:'height_100px'}
          ]
        }}
      ],
      domDict : {
          'div':[{id:'2', value:'abs'},{id:'11', value:'bg-main'}, {id:'21', value:'width_200px'},{id:'22', value:'height_100px'}]
      },
      dom:[],
      parentId: 'oo',
      id:'',
      cls:[]
    }
  },
  components: {
    divForm
  },
  methods: {
    addDiv(){
      var self = this;
      var type = 'div'
      var cls = _.map(self.domDict[type], function(x){
        return x.value
      })
      var temp = cls.join(' ')
      var id = self.guid()
      $('#'+self.parentId).append('<div id="'+id+'" class="'+temp+'"></div>')
      self.cls = self.domDict[type];
      self.id = id;

    },
    guid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        })
      }
    }
}
</script>

<style>
.bg-main{
  background: paleturquoise;
}
.bg-sub{
  background: red;
}
.width_200px{
  width: 200px;

}
.height_100px{
  height: 100px;

}
/* 设计时 ， 运行时的css 直接动态注入css*/
body{
    line-height:1.4;
    color:#333;
    font-family:arial;
    font-size: 12px;
    background:white;
}
input,textarea,select{
    font-size:12px;
    font-size:100%;
    font-family:arial;
    font-family:inherit;
}
body,h1,h2,h3,h4,h5,h6,p,ul,ol,form{
    margin:0;
}
h4,h5,h6{
    font-size:1em;
}
ul,ol{
    padding-left:0;
    list-style-type:none;
}
a img{border:0;}
img{border:0;}

html, body{
    height: 100%;
    overflow: hidden;

}

.left{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  border: 1px solid #eee;

}

.right{
  position: fixed;
  top: 0;
  height: 100%;
  right: 0;
  width: 200px;
  border: 1px solid #eee;
}





</style>
