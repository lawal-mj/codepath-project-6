import { Link } from "react-router-dom";

export default function Itemview(props) {
   return (
      <div className="flex flex-col justify-center items-center mb-1 bg-red-200 p-4 w-92 rounded-md">
         <h3 className="text-lg">Name : {props.name}</h3>
         <p className="text-md">Type : {props.type}</p>
         <p className="text-md">State : {props.state}</p>
         <p className="text-blue-500">
            <Link to={`/beers/${props.id}`}> Learn More </Link>
         </p>
      </div>
   )
}