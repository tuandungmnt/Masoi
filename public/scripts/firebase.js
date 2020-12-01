function initializeFirebaseApp() {
    const firebaseConfig = {
        apiKey: "AIzaSyC8X_4OPa-Dev8eMRtTlQM-_MZGGqV75qo",
        authDomain: "masoi-af5d8.firebaseapp.com",
        databaseURL: "https://masoi-af5d8.firebaseio.com",
        projectId: "masoi-af5d8",
        storageBucket: "masoi-af5d8.appspot.com",
        messagingSenderId: "915491263025",
        appId: "1:915491263025:web:85861d8b86bb76e4f73b10",
        measurementId: "G-N2XC6DEYEH"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}

function write(ref, data) {
    firebase.database().ref(ref).set(data);
}
function read(ref) {
    firebase.database().ref(ref).once('value').then((snapshot) => {
        document.getElementById("demo").innerHTML = snapshot.val().Haha;
    })
}