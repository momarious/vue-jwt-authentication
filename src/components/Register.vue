<template>
  <div class="center">
    <form class="col-lg-4" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>First Name</label>
        <input type="text" v-model="firstname" class="form-control" />
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input type="text" v-model="lastname" class="form-control" />
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" v-model="email" class="form-control" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="password" class="form-control" />
      </div>
      <div class="form-group">
        <label>Password Confirm</label>
        <input type="password" v-model="passwordconfirm" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      passwordconfirm: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        passwordconfirm: this.passwordconfirm,
      };
      axios
        .post("http://localhost:8000/register", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
