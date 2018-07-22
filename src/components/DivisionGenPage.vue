<template lang="pug">
  v-stepper(v-model="e1")
    v-stepper-header
      v-stepper-step(:complete="e1 > 1" step="1") 参加者
      v-divider
      v-stepper-step( :complete="e1 > 2" step="2") TL希望者
      v-divider
      v-stepper-step(step="3") 
    v-stepper-items  
      v-stepper-content(step="1")
        v-layout(row)
          v-flex(xs12 sm6 offset-sm3)
            v-list(v-for="item of items" :key="item.id") 
              v-list-tile(:key="item.id" avatar  @click="")
                v-list-tile-action
                  v-checkbox(:value="item.id",v-model="checkedNames")
                v-list-tile-avatar  
                  img(:src="item.data().src")
                v-list-tile-content   
                  v-list-tile-title {{item.data().nickname}}
                  v-list-tile-sub-title {{item.data().name}}
          v-btn(color="primary" @click="e1 = 2")   Continue  
      v-stepper-content(step="2")
        v-layout(row)
          v-flex(xs12 sm6 offset-sm3)
            v-list(v-for="item of getMembers" :key="item.id") 
              v-list-tile(:key="item.id" avatar  @click="")
                v-list-tile-action
                  v-checkbox
                v-list-tile-avatar  
                  img(:src="item.data().src")
                v-list-tile-content   
                  v-list-tile-title {{item.data().nickname}}
                  v-list-tile-sub-title {{item.data().name}}
          v-btn(color="primary" @click="e1 = 3")   Continue    
</template>            
<script>
import firebase from 'firebase/app';
import 'firebase/firestore';
export default {
  name: "division",
  data:() => {
    var itemss=[];
    var e1s=0;
    var db = firebase.firestore();
    db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        itemss.push(doc)
    });
});
 return{ 
   items :itemss,
   TLmember :  [],
   checkedNames:  [],
   e1: e1s
   }
  },
  computed:{
    getMembers: function () {
      var vm=this;
    return this.items.filter((item)=> {
      console.log(vm.checkedNames.indexOf(item.id)!=-1)
      return vm.checkedNames.indexOf(item.id)!=-1
    })
    }
  }
  ,
  methods:{
    
  }
}

</script>
<style lang="scss" scoped>

</style>

