var config = {
	    apiKey: "AIzaSyAoxt3erqcJHCoZZi66eJAEFSS16rEd-7k",
	    authDomain: "auth-fb-d94a2.firebaseapp.com",
	    databaseURL: "https://auth-fb-d94a2.firebaseio.com",
	    projectId: "auth-fb-d94a2",
	    storageBucket: "",
	    messagingSenderId: "406394859420"
	  };
	  firebase.initializeApp(config);

	//   var bigOne = document.getElementById('bigOne');
	//   var dbRef = firebase.database().ref().child('text');
	//   dbRef.on('value', snap => bigOne.innerText = snap.val());

	// const preObj = document.getElementById('objectPre');

	// const dbPreObj = firebase.database().ref().child('users');

	// dbPreObj.on('value', snap => preObj.innerText = JSON.stringify(snap.val()));


	//Get Elements
	const textEmail 	= document.getElementById('textEmail'); 
	const textPassword	= document.getElementById('textPassword');
	const btnSignin 	= document.getElementById('btnSignin'); 
	const btnSignup		= document.getElementById('btnSignup');
	const btnLogout		= document.getElementById('btnLogout');


	//Add Login/Signin Event
	btnSignin.addEventListener('click', e => {
		const email 	= textEmail.value;
		const password 	= textPassword.value;
		const auth 		= firebase.auth();

		//Signin
		const promise  = auth.signInWithEmailAndPassword(email,password);

		promise
				.then(user => console.log(user))
				.catch( e => console.log(e)); 
	})


	//Add Signup Event
	btnSignup.addEventListener('click', e =>{
		const email 	= textEmail.value;
		const password 	= textPassword.value;
		const auth 		= firebase.auth();

		//Signin
		const promise  = auth.createUserWithEmailAndPassword(email,password);

		promise
				.then(user => console.log(user))
				.catch( e => console.log(e)); 
	});


	//Add realtiime listeners
	firebase.auth().onAuthStateChanged( firebaseUser => {
		if(firebaseUser){
			//console.log(firebaseUser);
			btnLogout.classList.remove('hide');
		}else{
			console.log('Not login');
			btnLogout.classList.add('hide');
		}
	})

	//Logout
	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
	})