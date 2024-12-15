
import Link from 'next/link'
import { titleFont } from '@/config/fonts'

export const PageNotFound = () => {
  return (
    <div className=' flex flex-row h-[50hw] w-full justify-center items-center  ' >
      <div className=' flex flex-col justify-center items-center text-center px-5 mx-5 '>
        <h2 className={`${titleFont.className} antialiased text-9xl `} >404</h2>
        <p className=' font-semibold text-xl '>Woops! lo sentimos mucho.</p>
        <p className=' font-light '>
            <span>Puedes regresar al sitio </span>
            <Link href='/' className=' font-normal underline transition-all text-blue-600 hover:no-underline  ' >www.FitvibesGym.mx</Link>
        </p>
      </div>
 
    </div>
  )
}

export default PageNotFound
