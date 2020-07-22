import { Skill } from './skill';
import { error } from '@angular/compiler/src/util';

/**
 * A class modeling tasks that a developer can receive.
 * This task has a corresponding task#company token that was issued by a company or a team leader on the Instrumentality chain.
 * 
 */
export class Task {
    /**
     * A task object models a unique task token issued on the blockchain.
     * @param id The id of issued token
     * @param quantity The quantity that was transfered to the developer from that task
     * @param content The text of the task
     * @param difficulty The difficulty of a task
     * @param skills The skills needed for task completion
     * @param deadline (OPTIONAL) Deadline by which a task must be completed. Each day after deadline is penalized with 0.001 from all skills.
     * @param members (OPTIONAL) Can be used to specify other developers working on the same task
     * @param subtasks (OPTIONAL) Can be used to specify subtasks. They are used just for organization purposes and don't have blockchain value.
     * @param description (OPTIONAL) A more detailed description of the task
     */

     private subtasksStatus : Array<boolean> = new Array<boolean>();

    constructor(
        public id : number,
        public quantity: number,
        public content : string,
        public difficulty: number,
        public skills : Array<Skill>,
        public deadline: Date = null,
        public members : Array<string> = null,
        public subtasks : Array<string> = null,
        public description: string = null
    ) {
        if (subtasks != null) {
            subtasks.forEach( () => {
                this.subtasksStatus.push(false);
            });
        }
    }

    public toggleSubtask(subtaskId : number) : void {
        if (subtaskId < 0 || subtaskId > this.subtasks.length - 1) {
            console.error("Wrong subtask number. Not in range!");
        }
        else {
            this.subtasksStatus[subtaskId] = !this.subtasksStatus[subtaskId];
        }
    }
}
