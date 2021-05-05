///***CRUD - Search - filter - Sort by id ,title , prix - etc..... */

function create(){
    let books =[];

    let value = {Author: 'hell', title:"tit14hgh", prix: 120};
    let value2 = {Author: 'hell1', title:"tit1524hgh", agprixe: 120};

    //**add value */
    books.push(value);
    books.push(value2);

    console.log(books);

}

function delect(){
     let books =[];

    let value = {Author: 'hell', title:"tit14hgh", prix: 120};
    let value2 = {Author: 'hell1', title:"tit1524hgh", agprixe: 120};

    //**add value */
    books.push(value);
    books.push(value2);

    console.log(books);

    //**delect element */
    let index = books.indexOf(value);
    books.splice(index, 1);
    console.log(books);

}


//delect();

function getTitlesBooks(){
    //***get  All title books  */
    let books =[
        {Author: 'hell', title:"tilt1", prix: 120},
        {Author: 'hell1', title:"titl2", prix: 250},
        {Author: 'hell2', title:"titl3", prix: 68},
    ];

    let titleBooks = books.map((book) => book.title);
    console.log(titleBooks);

}

function getPrixBooks(){
    //***get  prix books * 2  and plus 100   */
    let books =[
        {Author: 'hell', title:"tilt1", prix: 120},
        {Author: 'hell1', title:"titl2", prix: 250},
        {Author: 'hell2', title:"titl3", prix: 68},
    ];

    let prixBooks = books.map((book) => book.prix * 2);
    let prixBooks2 = books.filter((book) => book.prix > 100);//**get which is >100 "filter" */
    console.log(prixBooks);
    console.log(prixBooks2);

}

//***get total prix  */
function getTotalPrix(){

    let sum =0;

    let books =[
        {Author: 'hell', title:"tilt1", prix: 120},
        {Author: 'hell1', title:"titl2", prix: 250},
        {Author: 'hell2', title:"titl3", prix: 68},
    ];

    books.forEach(x => sum += x.prix);//**loop */
      
    console.log(sum);
}

//getTotalPrix();




//**search if esixt that book  */
function searchBooks(titlebook){

      let books =[
        {Author: 'hell', title:"titl1", prix: 120},
        {Author: 'hell1', title:"titl2", prix: 250},
        {Author: 'hell2', title:"titl3", prix: 68},
    ];

    let reslt = books.find(x => x.title==titlebook);//**Find by Title  */

      if(reslt == undefined){
        console.log("not esixt !!!!")
      }
      else{
         console.log(reslt);
      }
    

}

//searchBooks("fffff");
//searchBooks("titl2");



//***update books */
function UpdateBook(id){
    
      let books =[
        {id:1,Author: 'hell', title:"titl1", prix: 120},
        {id:2,Author: 'hell1', title:"titl2", prix: 250},
        {id:3,Author: 'hell2', title:"titl3", prix: 68},
    ];

    let elementfind = books.findIndex(x => x.id == id);//**find index what have id like id = 1 and return index  */

    books[elementfind].Author = "hellooo"
    books[elementfind].title = "title1"
    books[elementfind].prix = "263"

    console.log("After update: ", books[elementfind])
}

//UpdateBook(1);


/**sort  */

function sortById(){

    let books =[
        {id:1,Author: 'hell', title:"titl1", prix: 120},
        {id:3,Author: 'hell1', title:"titl2", prix: 250},
        {id:2,Author: 'hell2', title:"titl3", prix: 68},
    ];

    books.sort(function (a, b) {

       return a.id - b.id;

    });

    console.log(books);
}

//sortById();


//*sort by title char by char  */
function sortByTitle(){

     let books =[
        {id:1,Author: 'hell', title:"titl1", prix: 120},
        {id:3,Author: 'hell1', title:"titl3", prix: 250},
        {id:2,Author: 'hell2', title:"titl2", prix: 68},
    ];

        books.sort(function(a, b) {

        var title1 = a.title.toUpperCase();
        var title2 = b.title.toUpperCase();
        if (title1 < title2) {
            return -1;
        }
        if (title1 < title2) {
            return 1;
        }
        return 0;
        });

        console.log(books);
}

//sortByTitle();


//**sort by prix from small to lang */

function sortByPrix(){

     let books =[
        {id:1,Author: 'hell', title:"titl1", prix: 120},
        {id:3,Author: 'hell1', title:"titl3", prix: 250},
        {id:2,Author: 'hell2', title:"titl2", prix: 68},
    ];

       books.sort(function (a, b) {

        return a.prix - b.prix; //**for reverse lange to smal => b.prix - a.prix */

        });

       
        console.log(books);
}

//sortByPrix();


//**get all book have author like hell2 and get just prix */
function getBookHaveAuther(nameauther){

     let books =[
        {id:1,Author: 'hell', title:"titl1", prix: 120},
        {id:2,Author: 'hell1', title:"titl3", prix: 250},
        {id:3,Author: 'hell2', title:"titl4", prix: 68},
        {id:4,Author: 'hell2', title:"titl5", prix: 68},
    ];

    let elemnts = books.filter(x => x.Author == nameauther).map(x => x.prix);
                    

    console.log(elemnts);

}

getBookHaveAuther("hell2");