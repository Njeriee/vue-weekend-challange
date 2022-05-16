<template>
  <div class="backdrop">
    <div class="input-modal">
      <div class="input-form">
        <form action="">
          <div>
            <label for="fname">First name:</label><br />
            <input class="border-b border-violet-700 py-2" type="text" />
          </div>
          <div>
            <label for="lname">Last name:</label><br />
            <input class="border-b active:border-b active:border-red-600 border-violet-700 py-2" type="text" />
          </div>
          <div>
            <label for="email">email:</label><br />
            <input class="border-b border-violet-700 py-2" type="email" />
          </div>
          <div>
            <label for="phoneNo">Phone Number:</label><br />
            <input class="border-b border-violet-700 py-2" type="text" />
          </div>
          <div class="pt-10">
            <label for="terms">Accept terms and conditions</label><br />
            <input class="" type="checkbox" />
          </div>
        </form>
        <div class="flex flex-row justify-center py-10">
          <input class="bg-violet-700 text-white px-5 py-2 rounded-full" type="button" value="Submit" @click="closeInputModal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        closeInputModal(){
            this.$emit('close')
        }
    }
}
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
