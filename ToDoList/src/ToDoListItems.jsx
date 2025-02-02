import React from 'react'

const ToDoListItems = ({value,index,deleteHandler, successHandler}) => {
    
      let  [success, setSuccess] = React.useState(false);

    return (
        <div>
            <li>{value} 
                <span onClick={()=>(deleteHandler(index))} >Delete</span>
                 <span onClick={()=>(setSuccess(!success))}>
                    {success ? 'Done' : 'Not Done'}
                 </span>
                 </li>
        </div>
    )
}

export default ToDoListItems