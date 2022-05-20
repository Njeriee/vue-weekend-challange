<template>
  <div>
    <button
      class="bg-green-200 text-blue-900 px-5 py-2 rounded-full m-10"
      @click="toggleInputModal"
    >
      Add User
    </button>
    <div class="flex flex-row justify-center">
      <table class="table-auto m-10 border">
        <thead class="bg-green-200 text-blue-900">
          <tr class="">
            <th class="px-5 py-4">User ID</th>
            <th class="px-5 py-4">First Name</th>
            <th class="px-5 py-4">Last Name</th>
            <th class="px-5 py-4">Phone No</th>
            <th class="px-5 py-4">Email</th>
            <th class="px-5 py-4">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" class="py-4">
            <td class="px-5">{{ user.id }}</td>
            <td class="px-5">{{ user.fname }}</td>
            <td class="px-5">{{ user.lname }}</td>
            <td class="px-5">{{ user.email }}</td>
            <td class="px-5">{{ user.phoneNo }}</td>
            <td>
              <button
                class="bg-red-200 p-4 rounded-lg mr-4 my-2"
                @click="deleteUser"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
              <button class="bg-blue-200 p-4 rounded-lg mr-4" @click="editUser(user)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div v-if="showInputModal">
    <InputModal @close="toggleInputModal" :user = 'user' />
  </div>
</template>

<script>
import InputModal from "./components/InputModal.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: { InputModal },

  data() {
    return {
      user:{},
      showInputModal: false,
    };
  },
  methods: {
    toggleInputModal() {
      this.showInputModal = !this.showInputModal;
    },
    deleteUser() {
      this.$store.commit("deleteUser");
    },
    editUser(user){
      this.user = user
      this.toggleInputModal()

    }
  },
  computed: {
    ...mapGetters({
      users: "getUsers",
    }),
  },
};
</script>

<style></style>
