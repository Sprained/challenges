export interface IEmployees {
    id: number,
    name: string,
    startsAt: string,
    finishesAt: string
}

export interface IScheduleEmployees {
    employeeId: number,
    appointmentId: string,
    startsAt: string,
    finishesAt: string
}