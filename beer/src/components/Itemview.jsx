import { Link } from "react-router-dom";

export default function Itemview(props) {
   return (
      <div>
         <h3>Name : {props.name}</h3>
         <p>type : {props.type}</p>
         <p>state : {props.state}</p>
         <Link to={`/beers/${props.id}`}> Learn More </Link>
         <br />
         <br />
         <br />
         <br />
      </div>
   )
}