export const WhiteBlock: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className="my-8 mx-4 flex flex-col rounded-lg bg-white py-8 px-4 md:my-4 md:w-full">
      {children}
    </div>
  )
}
