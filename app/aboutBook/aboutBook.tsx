import { Link } from "react-router";

export function AboutBook(){
    return (
    
        <main>
        
        <div>
            Du kollar nu på boken
        </div>
        
        <Link to={"/"}> gå tillbaka </Link>
        
        </main>
        
    );
}