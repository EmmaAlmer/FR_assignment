import { Link } from "react-router";
import type { Book } from "~/types/Library";

  const BookComponent = (props: Book) => {
    return (
        <div>

          <Link to={"/aboutBook"}> 
          <h1> {props.title} </h1> 
          <p> {props.author} </p>
          </Link>
          
        </div>

      );
  }; 
  export default BookComponent;