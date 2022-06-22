import dateFormat from 'dateformat';

const ExaminationItem = (props) => { 
    
    const date = dateFormat(props.item.date , "mmmm dS, yyyy")
    const id = props.item.id;
    const locationId = props.item.locationId;
    const result = props.item.result;
    const locationHandler = props.locationHandler
    return (
        <tr>
            <td>{date}</td>
            <td>{id}</td>
            <td> <button type="button" class="btn btn-link" onClick={locationHandler} data-toggle="tooltip" data-placement="right" title="Filter by Location">{locationId}</button></td>
            <td>{result}</td>
         </tr>       
    );
};

export default ExaminationItem;