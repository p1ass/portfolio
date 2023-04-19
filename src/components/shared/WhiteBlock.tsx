export const WhiteBlock: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className="mx-4 my-8 flex flex-col rounded-lg bg-white px-4 py-8 md:my-4 md:w-full">
      {children}
    </div>
  )
}
