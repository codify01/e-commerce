import firstImage from './e-commerce/imgOne.png'
import secondImage from './e-commerce/imgTwo.png'
import thirdImage from './e-commerce/imgThree.png'
import fourthImage from './e-commerce/imgFour.png'
const Intro = () => {
    return  (
        <>
            <section className='lg:flex items-center gap-5 justify-center mt-24'>
                <div>
                    <img src={firstImage} alt="product"/>
                </div>
                <div>
                    <img src={secondImage} alt="product"/>
                    <div className='text-center'>
                        <h1 className='uppercase text-[81px] font-semibold font-poppins leading-normal'>Unlimited</h1>
                        <h2 className='uppercase text-[180px] font-bold leading-tight'>Sale</h2>
                        <p className='uppercase text-lg text-center'>new collection</p>
                        <button className='bg-black text-white py-2 px-5 rounded my-5'>Shop Now</button>
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