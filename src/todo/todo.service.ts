import { Observable, Observer, of, Subject } from "rxjs";
import { ToDo } from "./todo.model";

export class TodoService {
    todos: ToDo[] = [];
    todoNotifier: Subject<boolean> = new Subject<boolean>()

    add(todo: ToDo): Observable<ToDo> {
        return new Observable<ToDo>((observer: Observer<ToDo>) => {
            setTimeout(() => {
                todo.id = this.todos.length + 1;
                this.todos.push(todo);
                this.todoNotifier.next(true);
                observer.next(todo);
            }, 1000)
        })
    }

    list(): Observable<ToDo[]> {
        return of(this.todos);
    }

    notify(): Observable<boolean> {
        return this.todoNotifier.asObservable();
    }
}