import React, {useState} from "react"


function NewTodoForm() {
    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const DescriptionChange=(event)=>{
        console.log("Description", event.target.value)
        setDescription(event.target.value)
    }

    const AssignedChange=(event)=>{
        console.log("Asigneed to", event.target.value)
        setAssigned(event.target.value)
    }
    
    return (
        <div className="mt-5">
            <form>
                <div className="mb-3"> 
                    <label className="form-label">Assigned</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        required 
                        onChange={AssignedChange}
                        value={assigned}
                        ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea 
                        type="text" 
                        className="form-control" 
                        rows={3} 
                        required
                        onChange={DescriptionChange}
                        value={description}
                    ></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-3">Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm