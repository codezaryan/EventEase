import { Atom } from 'react-loading-indicators'

export default function Loader() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="">
        <Atom color="#eb4e62" size="medium" text="" textColor="" />
      </div>
      <div className="ml-4 text-slate-950 text-2xl">Loading...</div>
    </div>
  )
}
