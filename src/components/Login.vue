<template>
 <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" >
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" >
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style>
body {
  background-color: #fff;
}
body > .grid {
  height: 100%;
}
.image {
  margin-top: -100px;
}
.column {
  max-width: 450px;
}
</style>
