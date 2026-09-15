import { WhiteBlock } from '../shared/WhiteBlock'

import { jobChangeMotivation } from './job_change_motivation'

export const MotivationCard = () => {
  return (
    <WhiteBlock>
      <h3 className="text-h4 font-bold">現在の転職意思</h3>
      <p className="mt-1 text-body-sm text-text-muted">2023/12/06 更新</p>
      <ul className="mt-4 flex flex-col gap-2">
        {jobChangeMotivation.statusDescriptions.map((status) => {
          const isCurrent = status.status === jobChangeMotivation.currentStatus
          return (
            <li
              key={status.status}
              aria-current={isCurrent}
              className={`flex items-start gap-3 rounded-md border p-3 text-body-sm ${
                isCurrent ? 'border-accent bg-surface-subtle' : 'border-transparent text-text-muted'
              }`}
            >
              <span aria-hidden className="text-h4">
                {status.icon}
              </span>
              <span>
                {isCurrent && <span className="block font-bold">現在の状況</span>}
                {status.description}
              </span>
            </li>
          )
        })}
      </ul>
      <h3 className="mt-8 text-h4 font-bold">採用担当の方へ</h3>
      <div className="mt-2 text-body-sm">
        <p>
          上記転職意思に関わらず、採用に関するメール・DMは常時受け付けています。しかし、必ずしもメールを返信するとは限りませんので予めご了承ください。
        </p>
        <p>また、人材紹介業の方からのご連絡はお断りしております。</p>
      </div>
    </WhiteBlock>
  )
}
