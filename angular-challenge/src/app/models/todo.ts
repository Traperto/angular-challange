export type Todo = {
    id: string
    title: string,
    description: string,
    priority: Priority,
    dueDate: Date,
    status: Status,
    addedDate: Date
}

export enum Priority {
    'urgent',
    'normal',
    'later',
    'delegate'
}

export type Status = 'complete' | 'incomplete'