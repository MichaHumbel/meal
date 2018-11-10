import firebase, { firestore } from 'firebase'

export default {
      name: 'signup',
    data() {
      return {
        email:'',
        password:'',
        firstname: '',
        lastname: '',

      }
    },
    methods:{
      signUp(){
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(this.email, this.password).then((user) => {

          const firestore = firebase.firestore();

          firestore.collection('users').doc(user.user.uid).set({
            firstname: this.firstname,
            lastname: this.lastname,
          })
          console.log(user)
          this.$router.push('/');
        }).catch((err) =>{
          alert(err.message);
        })
      }
    },

  }