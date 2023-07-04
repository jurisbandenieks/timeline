export interface Resource {
  id: string
  title: string
  events: Event[]
}

export interface Event {
  start: Date
  end?: Date
  title: string
  color?: string
}

export interface MonthYear {
  month: number
  year: number
}
