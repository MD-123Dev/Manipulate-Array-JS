
function addMap(){
    let Books = new Map()
    Books.set('pag1', 'tilt jfk olol');//**for add in Map */
    Books.set('pag2', 'tilt2 uji jkf');
    console.log(Books)
}

  //addMap();

function delectMap(){

    let Books = new Map()
    Books['pag1'] = 'tilt jfk olol';
    Books['pag2'] = 'tilt2 uji jkf';

    Books.delete('pag2');

    console.log(Books);
}

   //delectMap();


function cleanAllMap(){

    let Books = new Map()

    Books.set('pag1', 'tilt jfk olol');//**for add in Map */
    Books.set('pag2', 'tilt2 uji jkf');

    Books.clear();//**clear all map() */

    console.log(Books.size);
}

   //cleanAllMap();
   
function getSize(){
     
    let Books = new Map()
    Books.set('pag1', 'tilt jfk olol');//**for add in Map */
    Books.set('pag2', 'tilt2 uji jkf');

    let size = Books.size;

    console.log(size);

}

  //getSize();

function getAll(){
   
      
    let Books = new Map()
    Books.set('pag1', 'tilt jfk olol');
    Books.set('pag2', 'tilt2 uji jkf');
    
     const  values = Books.values(); //**return All values  */
     
      console.log(values);

  
}

  //getAll();

function UpadteMap(){

      
    let Books = new Map()
    Books.set('pag1', 'tilt jfk olol');//**for add in Map */
    Books.set('pag2', 'tilt2 uji jkf');

    Books.set('pag1','titl3 upd');//**update  */

    console.log(Books);

}

  //UpadteMap();

function chechIfExist(key){
   
     let Books = new Map()
    Books.set('pag1', 'tilt jfk olol');//**for add in Map */
    Books.set('pag2', 'tilt2 uji jkf');

    let retu = Books.has(key);

    if(retu !=true){
        console.log("not exist !!");
    }
    else
    {
        console.log(" exist");
    }

}

  // chechIfExist('pag3');
 

function getElementKey(key){
   
     let Books = new Map()
    Books.set('pag1', 'tilt jfk olol');//**for add in Map */
    Books.set('pag2', 'tilt2 uji jkf');

    let element = Books.get(key);

    console.log(element);

}

 //getElementKey('pag2');



