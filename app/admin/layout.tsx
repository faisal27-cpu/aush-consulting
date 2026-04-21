// Thin shell — login page lives here, protected routes have their own layout
export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
