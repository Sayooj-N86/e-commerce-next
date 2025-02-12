import Featured from '@/components/cards/Featured'
// import img2 from '@public/image/earbuds.jpg'
// import img3 from '@public/image/mentshirt.jpg'
// import img1 from '@public/image/mobile.jpg'
// import img7 from '@public/image/perfume.jpg'
// import img5 from '@public/image/shoe.jpg'
// import img6 from '@public/image/watch.jpg'
// import img4 from '@public/image/womendress.jpg'
import { storageUrl } from '../utils/Baseurl'

// const products = [
//     {
//         img : img1,
//         title: "Smart Phnones",
//         heading: "Staring At Just!!",
//         price: 6999        
//     },
//     {
//         img : img2,
//         title: "Head Phones",
//         heading: "Recommended deal for You",
//         price: 399
//     },
//     {
//         img : img3,
//         title: "Men T-shirts",
//         heading: "Flat 25% Off",
//         price: 149
//     },
//     {
//         img : img4,
//         title: "Women Favourites",
//         heading: "Flat 40% Off on 2 Combos",
//         price: 499     
//     },
//     {
//         img : img5,
//         title: "Shoes",
//         heading: "Men and Kids starting At",
//         price: 299            
//     },
//     {
//         img : img6,
//         title: "Watches",
//         heading: "Flat 20% Discount On woman's watches ",
//         price: 399      
//     },
//     {
//         img : img7,
//         title: "Perfumes",
//         heading: "Men Body Sprays",
//         price: 149      
//     }
 
// ]
type props={
    products:[
        {
            _id:string,
            image: string,
            price:number,
            description:string,
            name:string
        }
    ]
}
const Featureproducts = ({products}:props) => {
    return (
        <div>
            <div className='text-center font-bold text-[1rem]  md:text-[1.5rem]'>FEATURED PRODUCTS</div>
            <div className='text-center font-semibold text-[0.8rem] md:text-[1.2rem] pt-3'>Product Deatails and Prices</div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-3 pb-10 px-6 md:px-10'>
                {products.map((item,index) => <Featured  key={index} img={storageUrl + item.image} title={item.name} heading={item.description} price={ item.price} />)}
            </div>
        </div>
    )
}

export default Featureproducts