import { jobChangeMotivation } from '../../data/job_change_motivation'

export const MotivationCard = () => {
  return (
    <div className="bg-white flex flex-col m-4 p-4 w-full rounded-lg">
      <h3 className="text-center text-blue text-2xl font-bold">現在の転職意思</h3>
      <div className="mx-4">
        <p className="mt-2 text-center text-gray-light text-sm">2021/04/01 更新</p>
        <span className="border-border block mt-4 mx-auto p-8 w-min text-8xl border border-solid rounded-full">
          {currentStatus?.icon}
        </span>
        {statusList()}
        <h3 className="mt-4 text-center text-blue text-2xl font-bold">採用担当の方へ</h3>
        <p className="mt-4 text-gray">
          上記転職意思に関わらず、採用に関するメール・DMは常時受け付けています。しかし、必ずしもメールを返信するとは限りませんので予めご了承ください。
          <br />
          また、人材紹介業の方からのご連絡はお断りしております。
        </p>
      </div>
    </div>
  )
}

const currentStatus = jobChangeMotivation.statusDescriptions.find(
  (status) => status.status === jobChangeMotivation.currentStatus
)

const statusList = () => {
  return jobChangeMotivation.statusDescriptions.map((status) => {
    return (
      <dl key={status.icon} className="flex mt-4">
        <dt>{status.icon}</dt>
        <dd className="ml-2 text-gray">{status.description}</dd>
      </dl>
    )
  })
}
