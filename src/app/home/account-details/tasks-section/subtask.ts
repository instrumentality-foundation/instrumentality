/**
 * Mini-class modeling the subtask token
 */
export class Subtask {

    public state : boolean;

    /**
     * Create a simple subtask that has an unchecked state
     * @param id The subtask id. Must be unique among other subtasks in this task.
     * @param taskId The task associated with this subtask
     * @param content The text of the subtask
     */
    constructor(
        public id : number,
        public taskId : number,
        public content : string,
    ){
        this.state = false;
    }
}
