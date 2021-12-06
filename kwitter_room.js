var firebaseConfig = { apiKey: "AIzaSyAdmzkHnxdMx6Jo50_GQoGxiW42s05-lzQ", authDomain: "kwitter-993f0.firebaseapp.com", databaseURL: "https://kwitter-993f0-default-rtdb.firebaseio.com", projectId: "kwitter-993f0", storageBucket: "kwitter-993f0.appspot.com", messagingSenderId: "501876885120", appId: "1:501876885120:web:fc3947c5601139c19a0865" }; // Initialize Firebase firebase.initializeApp(firebaseConfig);

function add_room() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html"
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            room_names = childKey;
            console.log("room name-" + room_names);
            window.alert("room name-" + room_names);
            row = "<div class='room_name' id=" + room_names + "onclick='redirectToeRoomName(this.id)'>#" + room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            window.location("kwitter_room.html")
        });
    });
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
getData();
//DONE!!!