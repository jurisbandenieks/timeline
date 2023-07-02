export const getDaysInMonth = ({ year, month }: { year: number; month: number }): Date[] => {
  const daysInMonth: Date[] = []
  const startDate = new Date(year, month - 1, 1) // month is zero-based in JavaScript

  while (startDate.getMonth() === month - 1) {
    daysInMonth.push(new Date(startDate))
    startDate.setDate(startDate.getDate() + 1)
  }

  return daysInMonth
}

export const getYearAndMonth = (date = new Date()): { year: number; month: number } => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1 // Months are zero-based, so we add 1

  return { year, month }
}

export const formatDate = (date: Date): string => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const day = date.getDate()
  const suffix = getNumberSuffix(day)
  const formattedDate = `${daysOfWeek[date.getDay()]} ${day}${suffix}`

  return formattedDate
}

export const getNumberSuffix = (day: number): string => {
  if (day >= 11 && day <= 13) {
    return 'th'
  }

  const lastDigit = day % 10
  switch (lastDigit) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

export const addDays = (date: Date, days: number): Date => {
  const currentDate = new Date(date)
  const newDate = new Date(currentDate)
  newDate.setDate(currentDate.getDate() + days)
  return newDate
}

export const getDatesInRange = (startDate: Date, endDate: Date): Date[] => {
  const datesInRange: Date[] = []
  const currentDate = new Date(startDate)

  while (currentDate <= endDate) {
    datesInRange.push(new Date(currentDate))
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return datesInRange
}
