var firebaseConfig = {
    apiKey: "AIzaSyBbbD__WmO_VISFRtoerkOOToEktRwLTmo",
    authDomain: "letschat-da7ab.firebaseapp.com",
    databaseURL: "https://letschat-da7ab-default-rtdb.firebaseio.com",
    projectId: "letschat-da7ab",
    storageBucket: "letschat-da7ab.appspot.com",
    messagingSenderId: "73682676966",
    appId: "1:73682676966:web:db9dc8dc154829393cdf27",
    measurementId: "G-MMVLW68931"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name= localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML= "<h1>Welcome "+user_name+"!</h1>";

  function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }
getData();

function addRoom(){
  room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose: "adding room name"
})
localStorage.setItem("room_name", room_name);
window.location= "LetsChat_page.html";
}

function redirectToRoomName(name){
  localStorage.setItem("room_name", name);
  window.location = "LetsChat_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}