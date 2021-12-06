//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyC9jnHiz7PCABqFXZN0Uo6cce0XjAZwC4g",
    authDomain: "kwitter-9c066.firebaseapp.com",
    databaseURL: "https://kwitter-9c066-default-rtdb.firebaseio.com",
    projectId: "kwitter-9c066",
    storageBucket: "kwitter-9c066.appspot.com",
    messagingSenderId: "602149681928",
    appId: "1:602149681928:web:604ae48f733a40d68e0abd"
};
const app = initializeApp(firebaseConfig);

function getData() {
    firebase.database00().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                var username = message_data['name'];
                var like = message_data['like'];
                var message = message_data['message'];
                var msg = "<h4 class='message_h4'>" + message + "</h4>";
                var name = "<h4>" + username + "<img class='user_tick' src='tick.png'></h4>";
                var lk = "<button class='btn btn-warning' id=>" + firebase_message_id + "value = " + like + "onclick='updateLike(this.id)'>";
                var sp = "<span class='glyphicon glyphicon-thumbs-up'>like:" + like + "</span></button><hr>";
                var row = name + msg + lk + sp;
                document.getElementById("output").innerHTML += row;
                //End code
            }
        });
    });
}
getData();

function send() {
    mesg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: mesg,
        like: 0
    });
    document.getElementById("msg").value = "";
}

function updateLike(message_id) {
    console.log("clicked on the like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database.ref(room_name).child(messages_id).update({
        like: updated_likes
    });

}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
//DONE!!!