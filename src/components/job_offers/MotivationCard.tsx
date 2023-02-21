import { WhiteBlock } from '../shared/WhiteBlock'

import { jobChangeMotivation } from './job_change_motivation'

export const MotivationCard = () => {
  return (
    <WhiteBlock>
      <h2 className="text-center text-2xl font-bold text-blue">現在の転職意思</h2>
      <p className="mt-2 text-center text-sm text-gray-light">2023/02/21 更新</p>
      <span className="mx-auto mt-4 block w-min rounded-full border border-solid border-border p-8 text-8xl">
        {currentStatus?.icon}
      </span>
      {statusList()}
      <h2 className="mt-4 text-center text-2xl font-bold text-blue">採用担当の方へ</h2>
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
    <div className="mx-auto mt-4 mb-8 flex flex-col justify-center">
      {jobChangeMotivation.statusDescriptions.map((status) => {
        return (
          <dl key={status.icon} className="mt-2 flex items-center">
            <dt className="text-xl">{status.icon}</dt>
            <dd className="ml-2 text-gray">{status.description}</dd>
          </dl>
        )
      })}
    </div>
  )
}
