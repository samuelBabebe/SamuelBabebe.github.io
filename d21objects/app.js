//module.exports = {addBook,findTitles,finAuthr,findbookId}
let libraryBooks = {
    titel : ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"],
    author : ["Bill Gates", "Steve Jobs", "Suzanne Collins"],
    bookId : [1254, 3245, 4264]
}


function addBook(titles,authors,ids){
    titles = document.getElementById("title").innerHTML;
    authors =  document.getElementById("author").innerHTML;
    ids = document.getElementById("bookId").innerHTML;
    libraryBooks.titel.push(titles);
    libraryBooks.author.push(authors);
    libraryBooks.bookId.push(ids);
    let newbook ={ }
    let count = libraryBooks.titel.length-1
    for(let addis in libraryBooks){
        newbook[addis] = libraryBooks[addis][count]
    }

    return newbook;

}

//console.log(addBook("sam","sami", 1234));
//console.log(libraryBooks);

function findTitles(){
    let list =libraryBooks.titel;
    list.sort()
    return list;
}
//console.log(findtitel());

function finAuthr(){
    let list =libraryBooks.author;
    list.sort()
    return list;
}

function findbookId(){
    let list =libraryBooks.bookId;
   // list.sort((a,b) => a-b);
    return list;
}
//console.log(findbookId());




