let  listtask =[]

function inittask(titre,description){

   return {titre:titre , description:description};

}

function affichelistetask(){


    return listtask;

}


function addtask(titre,description){

 listtask.push(inittask(titre,description));

 return listtask;

}


function removetask = titreTask => {listtask.splice(
    listtask.findIndex(item=>item.titre ,item.titre===titreTask),1)
    return listtask;

};




module.exports={inittask,addtask,affichelistetask};
