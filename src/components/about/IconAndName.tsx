import Image from 'next/image'

export const IconAndName = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full border border-border p-8">
        <Image src="/p1ass.svg" alt="" width={128} height={128} />
      </div>
      <h1 className="mt-4 text-center text-h2 font-bold">
        p1ass
        <span className="block text-body font-normal text-text-muted">Naoki Kishi</span>
      </h1>
    </div>
  )
}
