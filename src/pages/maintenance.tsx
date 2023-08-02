import logoBackground from '@/assets/images/logo-bg.png'
import bgUserMaintenance from '@/assets/images/bg-user-maintenance.png'
import bgMaintenance from '@/assets/images/bg-maintenance.png'
import { useEffect, useState } from 'react'
import { formatTime } from '@/utils/time'

const Maintenance = (): JSX.Element => {
  const [time, setTime] = useState(15219)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev - 1)
    }, 1000)

    return () => { clearInterval(interval) }
  }, [])

  return (
    <div className="w-full flex flex-col h-screen">
      <img src={logoBackground} className="absolute" />
      <div className="h-2/3 flex justify-center items-end">
        <img src={bgUserMaintenance} className="w-2/5 aspect-auto mb-2" />
      </div>
      <div className="h-1/3 relative">
        <img src={bgMaintenance} className="h-full" />
        <div className="absolute top-[69px] left-1/2 translate-x-[-50%] text-center text-white flex flex-col items-center">
          <h2 className="text-4xl mb-4"> Hang on! We are under maintenance</h2>
          <p className="mb-4">It will not take a long time till we get the error fiked. We wii live again in</p>
          <p className="text-3xl mb-6">{formatTime(time)}</p>
          <div className="flex gap-2">
            <input
              className="h-11 w-[400px] px-4 py-2 bg-transparent border-solid border-white border-[1px] rounded placeholder:text-white"
              placeholder="Enter your email"
            />
            <button className="text-primary bg-white px-4 py-2 rounded"> Notify Me </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Maintenance
