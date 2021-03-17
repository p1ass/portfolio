export const AsideWrapper: React.FC = ({ children }) => {
  return (
    <aside className="pb-2 pt-4 bg-blue">
      <div className="container lg:max-w-5xl">{children}</div>
    </aside>
  )
}
