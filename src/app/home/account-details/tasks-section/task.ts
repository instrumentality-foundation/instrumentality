import { Skill } from './skill';

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
     * @param skill_qtys The rewards in skill tokens that a developer can get from solving this task
     * @param deadline (OPTIONAL) Deadline by which a task must be completed. Each day after deadline is penalized with 0.001 from all skills.
     * @param members (OPTIONAL) Can be used to specify other developers working on the same task
     * @param subtasks (OPTIONAL) Can be used to specify subtasks. They are used just for organization purposes and don't have blockchain value.
     */
    constructor(
        public id : number,
        public quantity: number,
        public content : string,
        public difficulty: number,
        public skills : Array<Skill>,
        public skill_qtys : Array<number>,
        public deadline: Date = null,
        public members : Array<string> = null,
        public subtasks : Array<string> = null
    ) {}
}
