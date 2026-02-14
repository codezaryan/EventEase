import { NavLink } from 'react-router-dom'

interface CardProps {
  image: string;
  title?: string;
  path?: string;
}

export default function Card({ image, title, path }: CardProps) {
  const cardContent = (
    <div className="bg-gray-400 rounded-lg shadow-md h-96 w-60 cursor-pointer hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title || 'img'} className='h-[90%] w-full object-cover rounded-t-lg' />
      <div className="h-[10%] bg-slate-950 text-slate-50 flex items-center justify-center">
        <span className="text-sm">👍 Like</span>
      </div>
      {title && <p className="text-center text-white font-medium p-2">{title}</p>}
    </div>
  )

  if (path) {
    return (
      <NavLink to={path} className="block">
        {cardContent}
      </NavLink>
    )
  }

  return cardContent
}
