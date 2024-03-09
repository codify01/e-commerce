import firstImage from './e-commerce/imgOne.png'
import secondImage from './e-commerce/imgTwo.png'
import thirdImage from './e-commerce/imgThree.png'
import fourthImage from './e-commerce/imgFour.png'
const Intro = () => {
    return  (
        <>
            <section className='container lg:flex items-center justify-between  mt-24'>
                <div className='hidden md:block'>
                    <img src={firstImage} alt="product"/>
                </div>
                <div>
                    <img src={secondImage} alt="product" className='hidden md:block'/>
                    <div className='text-center'>
                        <h1 className='uppercase text-[81px] font-semibold font-poppins leading-normal'>Unlimited</h1>
                        <h2 className='uppercase text-[180px] font-bold leading-tight'>Sale</h2>
                        <p className='uppercase text-lg text-center'>new collection</p>
                        <button className='btn'>Shop Now</button>
                    </div>
                    <img src={thirdImage} alt="product"/>
                </div>
                <div>                    
                    <img src={fourthImage} alt="product"/>
                </div>
            </section>
        </>
    )
}
export default Intro