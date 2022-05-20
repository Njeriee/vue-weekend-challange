<template>
  <div class="backdrop">
    <div class="input-modal">
      <div class="input-form">
        <form action="">
          <div>
            <label for="fname">First name:</label><br />
            <input class="border-b border-green-200 py-2" type="text"  v-model="form.fname"/>
          </div>
          <div>
            <label for="lname">Last name:</label><br />
            <input
              class="border-b active:border-b border-green-200 py-2"
              type="text" v-model="form.lname"/>
          </div>
          <div>
            <label for="email">email:</label><br />
            <input class="border-b border-green-200 py-2" type="email" v-model="form.email" />
          </div>
          <div>
            <label for="phoneNo">Phone Number:</label><br />
            <input class="border-b border-green-200 py-2" type="text" v-model="form.phoneNo" />
          </div>
          <div class="pt-10">
            <label for="terms">Accept terms and conditions</label><br />
            <input class="" type="checkbox" v-model="form.check" />
          </div>
        </form>
        <div class="flex flex-row justify-center py-10">
          <button
            class="bg-green-200 text-blue-900 px-5 py-2 rounded-full"
            type="button"
            value="Submit"
            @click="Form"
          > 
          {{action === 'save'?'Save User':'Update User'}}
          </button>
          <button class="bg-green-200 text-blue-900 px-5 py-2 rounded-full mx-4" @click="closeInputModal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'user'
  ],
  mounted(){
    if(this.user){
      this.form = this.user
      this.action = 'update'
    }
  },
  data(){
    return {
      form : {},
      action:'save'
    }
  },
  methods: {
    closeInputModal() {
      this.$emit("close");
      this.form = {}
      this.action = 'save'
    },
    Form(){
      if(this.action === 'save') {
        this.$store.commit('addUser', this.form)
      this.closeInputModal()
      }
      else{
        this.$store.commit('updateUser', this.form)
        this.closeInputModal()
      }
      // console.log(this.form)
    }
  },
};
</script>

<style>
.input-modal {
  width: 800px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  right: 0px;
  bottom: 0px;
  left: 0px;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
}
form {
  padding: 10px;
  font-family: sans-serif;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 10px;
}
</style>
