export const CardGrid: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return <div className="grid gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">{children}</div>
}
