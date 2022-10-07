import {useState} from 'react';

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
        <div>
            <h4>My Wish List</h4>        
        <div>
            <input type="text" onChange = {handleTextChange}/>
            <button onClick={addToList}>Add</button>
        </div>
        <ul>
            {list.map(t => <li>{t}</li>)}            
        </ul>
    </div>
    )
    }

    export default WishList;