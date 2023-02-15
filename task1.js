var array = [{
        id: 5,
        name: "gulabjamun",
        type: "sweet",
        description: "very famous sweet in the india the queen of sweet"
    }];
console.log(array);
var addRecepie = function (id, type, name, description) {
    var data = { id: id, type: type, name: name, description: description };
    // let data = { id: id, type: type, name: name, description: description };
    data.id = prompt("enter a recepie id:");
    data.name = prompt("enter a recepie name:");
    data.type = prompt("enter a recepie type:");
    data.description = prompt("enter about recepie:");
    // console.log(data);
    array.push(data);
    console.table(array);
};
var deleteRecepie = function (i) {
    var deleteData = prompt("enter id:");
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        i = array_1[_i];
        if (i.id = deleteData) {
            array.splice(i, 1);
            console.log("data deleted");
            console.log(array);
        }
    }
};
var viewRecepie = function () {
    console.log("viewed data");
    console.table(array);
};
var updateRecepie = function (i) {
    var updateData = prompt("enter id");
    for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
        i = array_2[_i];
        if (i.id == updateData) {
            i.id = prompt("enter a  recepie   id:");
            i.name = prompt("enter a  recepie name:");
            i.type = prompt("enter a receipe  type:");
            i.description = prompt("enter a  recepie description");
            console.log("updated data");
            console.table(array);
        }
    }
};
var exit = function () {
    console.clear;
};
