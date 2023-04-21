export const formatTime = (time: number) => {
  const day = Math.floor(time / 86400)
  const hour = Math.floor((time - day * 86400) / 3600)
  const minutes = Math.floor((time - day * 86400 - hour * 3600) / 60)
  const seconds = time - day * 86400 - hour * 3600 - minutes * 60
  const formattedDay = day < 10 ? `0${day}` : day
  const formattedHour = hour < 10 ? `0${hour}` : hour
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds
  return `${formattedDay}:${formattedHour}:${formattedMinutes}:${formattedSeconds}`
}
