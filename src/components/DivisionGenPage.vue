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
        v-layout(column)
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
          v-btn(color="primary" @click="e1 = 2" large)   Continue  
      v-stepper-content(step="2")
        v-layout(column)
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
          v-btn(color="primary" @click=" getTableNumber(); e1 = 3;" large)   Continue
      v-stepper-content(step="3")
        v-layout(column)
          v-data-table( :headers="headers" :items="groups" hide-actions class="elevation-1")
            template(slot="items" slot-scope="props")
              <td>{{ props.item.TL}}</td>
              <td >{{ props.item.members[0] }}</td>
              <td >{{ props.item.members[1] }}</td>
              <td >{{ props.item.members[2]}}</td>
              <td >{{ props.item.members[3] }}</td>
              <td >{{ props.item.members[4] }}</td>
          v-btn(color="primary" @click="" large)   Continue        
</template>            
<script>
import firebase from 'firebase/app';
import 'firebase/firestore';
export default {
  name: "division",
  data:() => {
    var itemss=[];
    var db = firebase.firestore();
    db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        itemss.push(doc)
    });
});
 return{ 
   //全員
   items :itemss,
   //TL希望者
   TableMembers :  [],
   //来る人でTLじゃない
   TableMembers :  [],
   //来る人
   checkedNames:  [],
   e1: 0,
   headers: [
          {
            text: 'Tabele Leader',
            align: 'left',
            sortable: false,
            value: 'TL'
          },
          { text: 'Member1', value: 'members[0]' },
          { text: 'Member2', value: 'members[1]' },
          { text: 'Member3', value: 'members[2]' },
          { text: 'Member4', value: 'members[3]' },
          { text: 'Member5', value: 'members[4]' }
        ],
  groups: []
   }
  },
  computed:{
    getMembers: function () {
      var vm=this;
    return this.items.filter((item)=> {
      return vm.checkedNames.indexOf(item.id)!=-1
    })
    }
  }
  ,
  methods:{
    //TLと全体が釣り合ってる前提
    getTableNumber:function () {
     var vm=this;
     var groups=[] 
     var tables= vm.checkedNames.length/4
     var additionalTables= vm.checkedNames.length%4
     
var tmpMembers=vm.TableMembers;
for(var i = tmpMembers.length - 1; i > 0; i--){
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = tmpMembers[i];
    tmpMembers[i] = tmpMembers[r];
    tmpMembers[r] = tmp;}
    console.log(tmpMembers)

 for (var number = 0; number < tables.length; number++){
        var x={
         value:false,
         TL:"",
         members:[]
       }
       x.TL="vm.checkedNames[number-1]"
       x.members=tmpMembers.slice(number-1,number+3)
       groups.push(x);
}
    

     this.groups=groups;

    }
  }
}

</script>
<style lang="scss" scoped>

</style>

