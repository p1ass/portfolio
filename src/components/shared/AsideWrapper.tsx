export const AsideWrapper: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <aside className="bg-blue pt-4 pb-1">
      <div className="container lg:max-w-5xl">{children}</div>
    </aside>
  )
}
