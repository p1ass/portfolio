export const AsideWrapper: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <aside className="bg-brand-surface px-6">
      <div className="mx-auto max-w-5xl">{children}</div>
    </aside>
  )
}
