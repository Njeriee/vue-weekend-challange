<script>
import InputModal from "./components/InputModal.vue";

export default{
    name: "App",
    components: { InputModal },
    data() {
      return {
        showInputModal: false
      }
    },
    methods: {
      toggleInputModal(){
        this.showInputModal = !this.showInputModal
      }
    }
}
</script>

<template>
<div>
  <button class="bg-violet-700 text-white px-5 py-2 rounded-full m-10" @click="toggleInputModal">Add User</button>
  <div class="flex flex-row justify-center">
    <table class="table-auto m-10">
      <thead>
        <tr>
          <th class="px-5">First Name</th>
          <th class="px-5">Last Name</th>
          <th class="px-5">Phone No</th>
          <th class="px-5">Email</th>
          <th class="px-5">Action</th>
      </tr>
      </thead>
    </table>
  </div>
</div>
<div v-if = "showInputModal">
  <InputModal @close = "toggleInputModal"/>
</div>
</template>

<style>

</style>
