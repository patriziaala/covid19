
import React from 'react';

import ExaminationItem from './ExaminationItem';



const Examinations = (props) => {
  const items = props.items;
  const locationHandler = props.locationHandler;
   return( 
    <table class="table table-striped table-sm">
    <thead>
      <tr>
        <th scope="col-sm-5"> DATE</th>
        <th scope="col"> ID </th>
        <th scope="col"> LOCATION ID </th>
        <th scope="col"> RESULT </th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => ( 
            <ExaminationItem key={item.id} item={item} locationHandler={() => locationHandler(item.locationId)} />                
      ))}
    </tbody>
    
</table>  
   )
}

export default Examinations;