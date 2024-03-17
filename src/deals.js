import model from './e-commerce/model-1.png'

const Deals = () => {
   return(
    <>
            <div className='container  lg:flex justify-between mt-28 '>
                <div className="lg:w-[30%]">
                    <h1 className="text-6xl leading-snug">Deals of the Month</h1>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin. Scelerisque duis ultrices sollicitudin aliquam sem.
                    </p>
                    <button className="btn my-6">Buy Now</button>
                    <h4 className="text-2xl font-semibold my-4">Hurry, Before Its Too Late</h4>
                    <div className="flex gap-3 mt">
                        <div className="timeDiv">
                            <span>40</span>
                            <p className="text-lg text-center font-medium mt-3">Days</p>
                        </div>
                        <div className="timeDiv">
                            <span>59</span>
                            <p className="text-lg text-center font-medium mt-3">Hr</p>
                        </div>
                        <div className="timeDiv">
                            <span>60</span>
                            <p className="text-lg text-center font-medium mt-3">Mins</p>
                        </div>
                        <div className="timeDiv">
                            <span>50</span>
                            <p className="text-lg text-center font-medium mt-3">Secs</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <button></button>
                        <button></button>
                    </div>
                    <div>
                        <img src={model} alt="Model" />
                    </div>
                </div>
            </div>
    </>
   )
}
export default  Deals