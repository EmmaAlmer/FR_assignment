import { useState } from "react";
import { Link, useLocation } from "react-router";
import type { Book } from "~/types/Library";

export function AboutBook(){

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const title = queryParams.get('title');
    const author = queryParams.get('author');
    const inStock = queryParams.get('inStock');
    const id = queryParams.get('id');

    const [alreadyLoanedBook, setAlreadyLoanedBook] = useState<boolean>(false);

    function loanBookButton(){
       tryLoanBook(isBookAvailable());
    }

    function isBookAvailable() : boolean{

        return inStock === "true"
    }

    function tryLoanBook(isAvailable: boolean){

        if (isAvailable){

            if (alreadyLoanedBook){
                alert("du har redan lånat denna bok!")
            }

            else {
                setAlreadyLoanedBook(true)
                alert("grattis till din nya bok! (" + stringifyBook({
                    title: title || "",
                    author: author ||"",
                }) +")")
            }
        }

        else {
            alert("attans boken finns ej i lager")
        }
    }

    function stringifyBook(book: {title : string, author : string}) : string{
        
        const bookString : string = "titel: " + book.title + ", författare: " + book.author

        return bookString
    }

    return (
    
        <main>

            <Link to="/"> 
            <div id="button"> 
            Gå tillbaka
            </div> 
            </Link>
        
        <h1>
            {title} 
        </h1>

        <h2> {author} </h2>

        <p> 
            {inStock === "true" ? "I lager" : "Ej i lager"}, Bok id: {id}
        </p>

        <button onClick={loanBookButton}> Vill du låna bok? </button>
    
        
        </main>
        
    );
}