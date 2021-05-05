//**add - remove - getAll - update - find .... */


function getAll(){
    
    let arr = [1,2,5,4,6,9,7,3,10];

    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }

}

  //getAll();


  function add(){

      let arr = [1,2,5,4,6,9,7,3,10];

      arr.push(4);// add in last
      arr.unshift(4);//**add in first  */

      console.log(arr);

  }

  //add();


  function removeElemnt(element){

      let arr = [1,2,5,4,6,9,7,3,10];

      let index = arr.indexOf(element);
      arr.splice(index, 1); ///**remove elment  */
     

      console.log(arr);
    
  }

  //removeElemnt(2);


  function updateElement(element,valuenew){

       let arr = [1,2,5,4,6,9,7,3,10];

        let index = arr.indexOf(element);
        arr.splice(index,1,valuenew); //**update elements */
     

      console.log(arr);
    
  }

  //updateElement(5,120);


  function findElement(element){
      
         let arr = [1,2,5,4,6,9,7,3,10];

        let elemnts = arr.find(x => x ==element);

        if(elemnts!=undefined){

             console.log("elemnt  "+elemnts+"  esist");
            
        }
        else
        {
           console.log("not esist !!"); 
        }
      
  }

  //findElement(10);