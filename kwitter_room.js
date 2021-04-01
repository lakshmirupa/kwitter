/* Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyD5VZluo-CCLYCy48x9l0uttkDYK5bmr6U",
    authDomain: "kwritter-f0385.firebaseapp.com",
    projectId: "kwritter-f0385",
    storageBucket: "kwritter-f0385.appspot.com",
    messagingSenderId: "684814749109",
    appId: "1:684814749109:web:1dee8f3e68a25c45a71dfc",
    measurementId: "G-S9G1RHLTSJ"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);*/

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAlWWr-Ps8-loK4YSV0sbRVh0zytXzAOtg",
    authDomain: "practice-cf527.firebaseapp.com",
    databaseURL: "https://practice-cf527-default-rtdb.firebaseio.com",
    projectId: "practice-cf527",
    storageBucket: "practice-cf527.appspot.com",
    messagingSenderId: "108742475219",
    appId: "1:108742475219:web:47c033642bd2710c134326",
    measurementId: "G-Z9DCBMW77M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

document.getElementById("addRoombtn").addEventListener("click", () => {
    room_name = document.getElementById("room_name").value;
    if(room_name != null) {
        
        firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
            });
        localStorage.setItem("user_name", room_name);
        window.location = "kwitter_page.html";
    }else {
        window.alert("😔😓 opps!! Error plaese fill the form and try again");
        console.error("😔😓 opps!! Error plaese fill the form and try again");
    }
});


/*function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
 purpose : "adding room name"
 });

    localStorage.setItem("room_name", room_name);
    
    window.location ="kwitter_page.html";
}*/

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
