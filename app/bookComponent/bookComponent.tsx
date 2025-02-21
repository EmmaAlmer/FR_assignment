
import { Link } from "react-router";
import type { Book } from "~/types/Library";

/* bokkomponent som kan återanvändas */
  const BookComponent = (props: Book) => {

    const linkPath: string = "/aboutBook?title=" + props.title 
    + "&author=" + props.author
    + "&inStock=" + props.inStock
    + "&id=" + props.id;
        
    return (
        <div>
        
          <Link id="links" to= {linkPath}> 
          <h1> {props.title} </h1> 
          <h2> {props.author} </h2>
          </Link>
          
        </div>

      );
  }; 
  export default BookComponent;