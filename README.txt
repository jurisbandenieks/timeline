Timeline Props

Event {
  start: Date
  end?: Date
  title: string
  color?: string
}

Resource {
  id: string
  title: string
  events: Event[]
}

MonthYear {
  month: number
  year: number
}

handleClick(data: Resource) => void
handleUpdateDate(data: MonthYear) => void
