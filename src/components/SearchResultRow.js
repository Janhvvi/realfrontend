import { useNavigate } from "react-router-dom";


const SearchResultRow = (props) => {


    let navigate = useNavigate();
   
    let clickHandler = () => {
        navigate('/searchedhouse',{state:{"_id":props.house._id}});
     }


    return (  
        <tr class="" onClick={clickHandler}>
            <th scope="row">{props.house.address}</th>
            <td> {props.house.price}</td>
            <td> {props.house.description}</td>
        </tr>  
    );
}
 
export default SearchResultRow;