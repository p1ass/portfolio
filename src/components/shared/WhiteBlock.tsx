export const WhiteBlock: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className="flex flex-col py-8 px-4 my-8 mx-4 bg-white rounded-lg md:my-4 md:w-full">
      {children}
    </div>
  )
}
