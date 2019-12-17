const a = require('inittask');
const list = require('affichelistetask');

it('test creation task ',()=>{

    const titre = "travailler";
    const description = "Aller au boulot";

    let task=a(titre,description);

    expect(task.titre).toEqual(titre);
    expect(task.description).toEqual(description);

});


it('test task_taille ',()=>{


    let task=a(titre,description);

    expect(list.length).toEqual(1);

});