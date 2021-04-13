export class Task {
    id: number;
    name: string;
    date: Date;
    // status: Array<string> = ['new', 'in_progress', 'completed'];
    status: string;
    description?: string;
}
