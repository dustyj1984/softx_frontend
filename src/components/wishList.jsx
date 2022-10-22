import {useState} from 'react';
import "./wishList.css";



const WishList = ()=>{
    const[text, setText] = useState("");
    const [list, setList] = useState ([]);

    const handleTextChange = (e) => {
        setText(e.target.value);
    }
    const addToList=()=>{
        let copy = [...list];
        copy.push(text);
        setList(copy);
        setText("");
    }
    return(
        <div className='wishList'>
            <h4>My Wish List</h4>        
        <div>
            <input className= "form-control" type="text" onChange = {handleTextChange} value={text}/>
            <button onClick={addToList}>Add</button>
        </div>
        <ul>
            {list.map(text => <li key= {text}>{text}</li>)}            
        </ul>
    </div>
    )
    };

    export default WishList;