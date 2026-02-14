export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-50 p-4">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} EventEase. All rights reserved.
      </div>
    </footer>
  )
}
