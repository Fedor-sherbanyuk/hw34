export const Form= ({submitHandler}) =>{
        return (
            <form onSubmit={submitHandler}>
                    <input placeholder="Name of todo" autoComplete="off" name="todoInput"/>
                    <button type="submit">Add Todo</button>
            </form>
        );
};
