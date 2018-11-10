<template>
  <div class="container">


  <h1>Sign UP</h1>

  <input v-model="email" type="text" placeholder="Email" />
  <input v-model="password" type="password" placeholder="Password" />
  <input v-model="firstname" type="text" placeholder="firstname" />
  <input v-model="lastname" type="text" placeholder="lastname" />

  <button @click="signUp">Create Account</button>


</div>
</template>

<style src="./SignUp.css" ></style>
<script src="./SignUp.js"></script>