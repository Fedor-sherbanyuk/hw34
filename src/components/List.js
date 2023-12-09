import {ListItem}  from './ListItem';

export const List =({list, onClickHandler, onDelete})=>{
    return (
        <ul>
            {list.map((todo)=>(
                <ListItem key={todo.id} item={todo} onClickHandler={onClickHandler} onDelete={onDelete}/>
            ))}
        </ul>
    )
}
