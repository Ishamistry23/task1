
let array = [{
                    id: 5,
                    name: "gulabjamun",
                    type: "sweet",
                    description: "very famous sweet in the india the queen of sweet"
}];
console.log(array);

let addRecepie = (id: number | null | string, type: string | null, name: string | null, description: string | null) => {

                    let data: any = { id: id, type: type, name: name, description: description };

                    // let data = { id: id, type: type, name: name, description: description };

                    data.id = prompt("enter a recepie id:");
                    data.name = prompt("enter a recepie name:");
                    data.type = prompt("enter a recepie type:");

                    data.description = prompt("enter about recepie:");
                    // console.log(data);
                    array.push(data);
                    console.table(array);


}



let deleteRecepie = (i) => {
                    const deleteData = prompt("enter id:");
                    for (i of array) {
                                        if (i.id = deleteData) {
                                                            array.splice(i, 1);
                                                            console.log("data deleted")
                                                            console.log(array);

                                        }


                    }

}

const viewRecepie = () => {
                    console.log("viewed data")
                    console.table(array);
}
const updateRecepie = (i) => {
                    const updateData = prompt("enter id");
                    for (i of array) {
                                        if (i.id == updateData) {
                                                            i.id = prompt("enter a  recepie   id:");
                                                            i.name = prompt("enter a  recepie name:");
                                                            i.type = prompt("enter a receipe  type:");
                                                            i.description = prompt("enter a  recepie description");
                                                            console.log("updated data");
                                                            console.table(array);

                                        }
                    }
}
const exit = () => {
                    console.clear;
}