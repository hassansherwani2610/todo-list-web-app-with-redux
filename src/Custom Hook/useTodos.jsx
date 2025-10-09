import { useDispatch, useSelector } from "react-redux";
import { setTodos, addTodo, updateTodo, removeTodo, removeAll } from "../Features/Todo/TodoSlice";
import axios from "axios";

const API_URL = "https://68c2a150f9928dbf33ef2d34.mockapi.io/api/v1/users";

export default function useTodos(){
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const fetchTodos = async () => {
        try{
            const response = await axios.get(API_URL);
            dispatch(setTodos(response.data));
        }
        catch(error){
            console.log("Fetch Error: " , error);
        }
    };

    const createTodo = async (text) => {
        try{
            const response = await axios.post(API_URL , { text });
            dispatch(addTodo(response.data));
        }
        catch(error){
            console.log("Fetch Error: " , error);
        }
    };

    const editTodo = async (id , newText) => {
        try{
            const response = await axios.put(`${API_URL}/${id}` , {text: newText});
            dispatch(updateTodo({newId : id , newText : response.data.text}));
        }
        catch(error){
            console.log("Fetch Error: " , error);
        }
    };

    const deleteTodo = async (id) => {
        try{
            await axios.delete(`${API_URL}/${id}`)
            dispatch(removeTodo(id))
        }
        catch(error){
            console.log("Fetch Error: " , error);
        }
    }

    const deleteAllTodo = async () => {
        try{
            const response = await axios.get(API_URL);
            const allTodos = response.data;

            await Promise.all(allTodos.map((todo) => axios.delete(`${API_URL}/${todo.id}`)))
            dispatch(removeAll());
        }
        catch(error){
            console.log("Fetch Error: " , error);
        }
    }

    return { todos , fetchTodos , createTodo , editTodo , deleteTodo , deleteAllTodo };
}