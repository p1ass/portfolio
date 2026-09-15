export const CardGrid: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
}
