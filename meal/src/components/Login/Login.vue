<template>
<div class="container">

    <input v-model="email" type="text" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />

   <button @click="login">login</button>
    <button @click="redirect">Create Account</button>
    <br>
    <br>
    <div>Login Data: {{loginData}}</div>
</div>
</template>



<style src="./Login.css"></style>
<script src="./Login.js"></script>