import Image from 'next/image'
import { storageUrl } from '../utils/Baseurl'
import Link from 'next/link'

type props={
    Categories:[
        {
            _id:string,
            image:string,
            name:string
        }
    ]
}
const Categories = ({Categories}:props) => {
    return (
        <div>
            <div className='flex justify-center font-bold pt-8 text-[1rem] md:text-[1.5rem]'>CATEGORIES</div>
            <div className='flex justify-center font-semibold pt-2 md:pt-4 text-[0.8rem]  md:text-[1.2rem]'>These are our Categories</div>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-rows-2 gap-3 px-6 md:px-12 pt-5 pb-14'>
                <div className=' col-span-1 row-span-2 relative h-[18rem] md:h-[15rem] lg:h-[25rem] w-100 hover:scale-95 transition-all duration-300 shadow-2xl'>
                    <Link href={`/shop/${Categories.at(0)?._id}`}><Image src={storageUrl + Categories.at(0)?.image} alt='men' fill className='object-cover rounded-lg '/></Link>
                    <div className='absolute bg-gradient-to-r from-blue-500 text-white hover:to-white hover:text-black font-bold text-[0.7rem] md:text-[0.9rem] p-2 md:p-3 bottom-4 start-4 rounded-xl hover:border'>
                        <button>GENTS</button>
                    </div>
                </div>
                <div className='relative col-span-1 row-span-2 hover:scale-95 transition-all duration-300 h-[18rem] md:h-[15rem] lg:h-[25rem] shadow-2xl'>
                   <Link href={`/shop/${Categories.at(1)?._id}`}> <Image src={storageUrl + Categories.at(1)?.image} alt='women' fill className='object-cover rounded-lg'/></Link>
                    <div className='absolute bg-gradient-to-r from-blue-500 text-white hover:to-white hover:text-black font-bold text-[0.7rem] md:text-[0.9rem] p-2 md:p-3 bottom-4 start-4 rounded-xl hover:border'>
                        <button>LADIES</button>
                    </div>
                </div>
                <div className='relative col-span-1 row-span-1 hover:scale-95 transition-all duration-300 h-[18rem] md:h-[15rem] lg:h-auto shadow-2xl'>
                   <Link href={`/shop/${Categories.at(2)?._id}`}> <Image src={storageUrl + Categories.at(2)?.image} alt='kids' fill className='object-cover rounded-lg'/></Link>
                    <div className='absolute bg-gradient-to-r from-blue-500 text-white hover:to-white hover:text-black font-bold text-[0.7rem] md:text-[0.9rem] p-2 md:p-3 bottom-4 start-4 rounded-xl hover:border'>
                        <button>KIDS</button>
                    </div>
                </div>  
                <div className='relative col-span-1 row-span-1 hover:scale-95 transition-all duration-300  h-[18rem] md:h-[15rem] lg:h-auto shadow-2xl'>
                    <Link href={`/shop/${Categories.at(3)?._id}`}><Image src={storageUrl + Categories.at(3)?.image} alt='accessories' fill className='object-cover rounded-lg'/></Link>
                    <div className='absolute bg-gradient-to-r from-blue-500 text-white hover:to-white hover:text-black font-bold text-[0.7rem] md:text-[0.9rem] p-2 md:p-3 bottom-4 start-4 rounded-xl hover:border'>
                        <button>ACCESSORIES</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories