function sayHi() {
    var txtName = document.getElementById("learn");
    var txtOutput = document.getElementById("themselves");
    var name = txtName.value;
    txtOutput.value = "Hi there, " + name + "!";
}