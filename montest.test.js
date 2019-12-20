//const a = require('./todolist.js/inittask');
//const list = require('./todolist/affichelistetask');


global.console = {
    log: jest.fn(),
    info: jest.fn(),
    error: jest.fn()
}

function affiche(task){

    console.log( "titre = ", task.titre ,"  description = " , task.description,"/n");

}

function inittask(titre,description){

    return {titre , description};

}

function addtask(titre,description){

    let  listtask =[]

    listtask.push(inittask(titre,description));

    return listtask.length;

}

function addtask2(titre,description,listtask){

    listtask.push(inittask(titre,description));

    return listtask;

}

function removetask(titreTask, listtask)  {listtask.splice(
    listtask.findIndex(item=>item.titre === titreTask),1)
    return listtask.length;

};

function removetask2(titreTask, listtask)  {listtask.splice(
    listtask.findIndex(item=>item.titre === titreTask),1)
    return listtask;

};

function updatetask(titreTask, newtitre,newdescription ,listtask)  {

    const etape1 = removetask2(titreTask,listtask);

    const result = addtask2(newtitre,newdescription,etape1);


    return result;

};


it('test creation task ',function(){

    let  listtask =[]

    const titre = "travailler";
    const description = "Aller au boulot";

    let task=inittask(titre,description);

    expect(task.titre).toEqual(titre);
    expect(task.description).toEqual(description);

});


it('test task_ajout_list ',function(){

    let  listtask =[]

    const titre = "travailler";
    const description = "Aller au boulot";

    let list=addtask(titre,description);

    expect(list).toEqual(1);

});

it ('test retirer task',function(){

const listdetask = [{titre:"titre" , description:"description"},{titre:"titre1" , description:"description1"}];

const value = removetask('titre1',listdetask);

    expect(value).toEqual(1);


});



it('update task' ,function(){

    const listdetask = [{titre:"titre" , description:"description"},{titre:"titre1" , description:"description1"}];

   const newlist = updatetask("titre1","toto","bolo",listdetask);


    expect(listdetask[1]).toEqual(newlist[1]);




});




describe('Tests my console.log', () => {
    it('afficher task', () => {

        const task = { titre :"titre" , description : "description "};
        affiche(task);
        expect(global.console.log).toHaveBeenCalledWith(
            affiche(task)
        )
    })
})