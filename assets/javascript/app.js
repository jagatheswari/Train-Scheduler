// Initialize Firebase
var config = {
    apiKey: "AIzaSyAbcRsjNprUk-8rV5PpQsiZVzshWR-JIdw",
    authDomain: "traindb-1e1b5.firebaseapp.com",
    databaseURL: "https://traindb-1e1b5.firebaseio.com",
    projectId: "traindb-1e1b5",
    storageBucket: "traindb-1e1b5.appspot.com",
    messagingSenderId: "873265089044"
};
firebase.initializeApp(config);


function Add_Train() {
    var name = document.querySelector('#train_name').value;
    var dest = document.querySelector('#train_destination').value;
    var freq = document.querySelector('#train_frequency').value;
    var starttime = document.querySelector('#train_time').value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    else {
        console.log(name);
    }
    if (dest == "") {
        alert("Destination must be filled out");
        return false;
    }
    else {
        console.log(dest);
    }
    if (freq == "") {
        alert("Frequency must be filled out");
        return false;
    }
    else {
        console.log(freq);
    }
    if (starttime == "") {
        alert("time must be filled out");
        return false;
    }
    else {
        console.log(starttime);
    }
    //Create a tr element
    let telem = document.createElement("tr");
    let tname = document.createElement("td");
    let tdest = document.createElement("td");
    let tfreq = document.createElement("td");
    tname.textContent = name;
    telem.append(tname);
    tdest.textContent = dest;
    telem.append(tdest);
    tfreq.textContent = freq;
    telem.append(tfreq);

    document.querySelector('#train-table-body').append(telem);
}