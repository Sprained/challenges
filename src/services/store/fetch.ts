import moment from 'moment'
import axios from 'axios'

import { IEmployees, IScheduleEmployees } from '../../intercafes/employees.interface'

class StoreFetchService {
    getSchedules = async (): Promise<string[]> => {
        let schedule = []
        
        const employees = await this.getEmployees()
        for(const value of employees) {
            const item = await this.makeEmployeesSchedules(value.id, value.startsAt, value.finishesAt)

            schedule = schedule.concat(item)
        }

        schedule = schedule.filter((a, i, aa) => aa.indexOf(a) === i && aa.lastIndexOf(a) !== i)

        return schedule.sort()
    }

    getEmployees = async (): Promise<IEmployees[]> => {
        const { data } = await axios.get('https://api-homolog.geracaopet.com.br/api/challenges/challenge1/employees')
        return data.employees
    }

    makeEmployeesSchedules = async (id: number, startsAt: string, finishesAt: string): Promise<string[]> => {
        const schedule = this.makeSchedulesArray(startsAt, finishesAt)

        const { data } = await axios.get(`https://api-homolog.geracaopet.com.br/api/challenges/challenge1/employee/${id}/appointments`)

        data.appointments.map((value: IScheduleEmployees) => {
            let currentDate = moment(value.startsAt, 'HH:mm')
            const finalDate = moment(value.finishesAt, 'HH:mm')
            const diffHours = (moment.duration(finalDate.diff(currentDate)).asHours()) * 2
    
            new Array(Math.round(diffHours)).fill(diffHours).map((acc, index) => {
                const idx = schedule.indexOf(currentDate.format('HH:mm'))
                if(idx != -1) schedule.splice(idx, 1)
                currentDate = currentDate.add(30, 'minutes')
            })
        })
        
        return schedule
    }

    makeSchedulesArray = (startsAt: string, finishesAt: string): string[] => {
        const schedule = []

        let currentDate = moment(startsAt, 'HH:mm')
        const finalDate = moment(finishesAt, 'HH:mm')
        const diffHours = (moment.duration(finalDate.diff(currentDate)).asHours()) * 2 + 1

        new Array(diffHours).fill(diffHours).map((acc, index) => {
          schedule.push(currentDate.format('HH:mm'))
          currentDate = currentDate.add(30, 'minutes')
        })
        
        return schedule
    }
}

export default new StoreFetchService()