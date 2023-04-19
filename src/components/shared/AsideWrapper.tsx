export const AsideWrapper: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <aside className="bg-blue pb-1 pt-4">
      <div className="container lg:max-w-5xl">{children}</div>
    </aside>
  )
}
