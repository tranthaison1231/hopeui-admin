import { Area, AreaChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import ThisWeekSelector from './ThisWeekSelector'


interface Summary {
  month: string
  cost: number
  sales: number
}

interface Props {
  total: number
  width?: number
  height?: number
  data: Summary[]
}

const SummaryChart = ({ total, data, width = 800, height = 400 }: Props): JSX.Element => {
  return (
    <div className="p-6 shadow-md rounded-xl" style={{ width: width, height: height }}>
      <div className="flex w-full justify-between items-center  mb-6">
        <div>
          <h2 className="text-xl">${total}K</h2>
          <p className="text-base text-[#8A92A6]"> Gross Sales </p>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 bg-primary rounded-full" />
            <span className="text-[#8A92A6]"> Sales </span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 bg-[#85F4FA] rounded-full" />
            <span className="text-[#8A92A6]"> Cost </span>
          </div>
        </div>
        <ThisWeekSelector />
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data} margin={{ left: -20 }}>
          <XAxis dataKey="month" padding={{ left: 26 }} />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="sales" stackId="1" stroke="#85F4FA" fill="#85F4FA" />
          <Area type="monotone" dataKey="cost" stackId="1" stroke="#3A57E8" fill="#3A57E8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SummaryChart
