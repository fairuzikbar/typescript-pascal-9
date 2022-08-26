import { combineLatest, map } from "rxjs";
import { ToDo } from "./todo/todo.model";
import { TodoService } from "./todo/todo.service";

const todoService = new TodoService;
combineLatest([
    todoService.add({name : 'Bangun', isDone: true}),
    todoService.add({name : 'Makan', isDone: true}),
    todoService.add({name : 'Mandi', isDone: true}),
    todoService.add({name : 'Berangkat', isDone: false})
]).subscribe((todos) => {
    console.log(`${todos.length} kegiatan sudah ditambahkan`);
    
})

todoService.notify().subscribe((isUpdate: boolean) => {
    if(isUpdate){
        todoService.list().pipe(
            map((list: ToDo[]) => {
                return list.map((todo: ToDo) => {
                    return `ToDo : ${todo.name} ${(todo.isDone? 'sudah selesai': 'belum selesai')}`
                })
            })
        ).subscribe((todos) => {
            console.log(todos);
        })
    }
})