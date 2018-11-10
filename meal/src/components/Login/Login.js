import firebase from 'firebase'
  export default {
    data() {
      return {
        loginData: null,
        email:'',
        password:''
      }
    },
    methods:{
      login(){
        firebase.auth().signInWithEmailAndPassword(this.email,this.password).then((user) =>{
          alert('you are now logged in');
          this.loginData = user;
        }).catch((err) =>{
          alert(err.message);
        })
      },
      redirect(){
          this.$router.push('/SignUp');
      }
    }
 
  }