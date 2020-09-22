let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    document.getElementById('ajax').innerHTML = xhr.responseText;
  }
};

xhr.open('GET', 'ajax.html');

function sendAJAX() {
  xhr.send();
  // document.getElementById('load').style.display = "none";
}





var maybenot = new XMLHttpRequest();

maybenot.onreadystatechange = function () {
  if(maybenot.readyState === 4) {
    let employees = JSON.parse(maybenot.responseText);
    let statusHTML = "<br>";
    for (var i = 0; i < employees.length; i ++) {
      statusHTML += employees[i].firstName;
      statusHTML += " ";
      statusHTML += employees[i].lastName;
      statusHTML += "<br>";
      statusHTML += employees[i].title;
      statusHTML += "<br>";
      statusHTML += employees[i].nickname;
      statusHTML += "<br>";
      statusHTML += employees[i].email;
      statusHTML += "<br>";
    }
    statusHTML += "</ul>";
    document.getElementById('dbJSON').innerHTML = statusHTML;
  }
};
maybenot.open('GET', 'db.json');

function sendForJSON() {
  maybenot.send();
}
