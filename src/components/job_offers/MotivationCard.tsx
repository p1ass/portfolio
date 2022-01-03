import { jobChangeMotivation } from '../../data/job_change_motivation'
import { WhiteBlock } from '../shared/WhiteBlock'

export const MotivationCard = () => {
  return (
    <WhiteBlock>
      <h2 className="text-2xl font-bold text-center text-blue">現在の転職意思</h2>
      <p className="mt-2 text-sm text-center text-gray-light">2021/05/20 更新</p>
      <span className="block p-8 mx-auto mt-4 w-min text-8xl rounded-full border border-border border-solid">
        {currentStatus?.icon}
      </span>
      {statusList()}
      <h2 className="mt-4 text-2xl font-bold text-center text-blue">採用担当の方へ</h2>
      <div className="mt-4 text-gray">
        <p>
          上記転職意思に関わらず、採用に関するメール・DMは常時受け付けています。しかし、必ずしもメールを返信するとは限りませんので予めご了承ください。
        </p>
        <p>また、人材紹介業の方からのご連絡はお断りしております。</p>
      </div>
    </WhiteBlock>
  )
}

const currentStatus = jobChangeMotivation.statusDescriptions.find(
  (status) => status.status === jobChangeMotivation.currentStatus
)

const statusList = () => {
  return (
    <div className="flex flex-col justify-center mx-auto mt-4 mb-8">
      {jobChangeMotivation.statusDescriptions.map((status) => {
        return (
          <dl key={status.icon} className="flex items-center mt-2">
            <dt className="text-xl">{status.icon}</dt>
            <dd className="ml-2 text-gray">{status.description}</dd>
          </dl>
        )
      })}
    </div>
  )
}
