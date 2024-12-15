
'use client'
import { KommonExtraBold } from '@/config/fonts'
import { useRouter } from 'next/navigation'

const ButtonActivar = () => {

  const router = useRouter();

  const handleClick = () => {
    router.push(process.env.NEXT_PUBLIC_APP_URL + '/anualidad');
  }
  return (

    <button
      onClick={handleClick}
      className={`bg-white rounded-lg p-2 px-12 hover:bg-[#c21a83] shadow-md shadow-black/35 hover:shadow-black/75 hover:shadow-md hover:text-white ${KommonExtraBold.className} `}
    >
      ACTIVAR
    </button>
  )
}

export default ButtonActivar