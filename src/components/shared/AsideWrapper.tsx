export const AsideWrapper: React.FC = ({ children }) => {
  return (
    <aside className="pt-4 pb-1 bg-blue">
      <div className="container lg:max-w-5xl">{children}</div>
    </aside>
  )
}
