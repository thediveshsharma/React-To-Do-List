import './List.css';
function List({itemList, updateItemList}){
 const deleteItemFromList = key =>{
     const newList = itemList.filter((itemi)=>{
        return itemi.key !== key;
     });
     updateItemList(newList);
 };
    return <div>
        {itemList.map(itemi =>{
            return (
                <div key ={itemi.key} className='Item'>
                 <p>{itemi.item}</p>
                 <button onClick={() => deleteItemFromList(itemi.key)}>x</button>
                </div>
            )
        })}
 </div>       
}

export default List;