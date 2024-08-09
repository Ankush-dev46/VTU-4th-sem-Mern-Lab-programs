import {useState} from 'react';
function App(){
    const initiallist=['abcd','xyax','asdf','klhj'];
    const [list,updatelist]=useState(initiallist);
    const filterlist=(event)=>{
        const filtered=[];
        if(event.target.value){
            for(let i=0;i<initiallist.length,i++) {
                if(initiallist[i].includes(event.target.value))
                    filtered.push(initiallist[i]);
            }
            updatelist(filtered)
        }
        else
            updatelist(initiallist);
    };
    return(
        <div className="App">
            <label>Search: </label>
            <input type = 'text' onChange={(e)=>filterlist(e)}/>
            {(list)?<ul>
                {list.map((element,key)=>{
                    return(<li key={key}>{element}</li>)
                })}
            </ul>:<></>}
        </div>

    );
}
export default App;
