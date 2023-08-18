import React, { useState } from 'react'
import yellow from "../Images/yellow.png"
import green from "../Images/green.png"
import red from "../Images/red.png"
import blue from "../Images/purple.png"
export default function Home() {
    const [image, setImage]= useState(yellow);
    const handleGreenButtonClick = () => {
        setImage(green);
        handleImageChange();
    };
    const handleRedButtonClick = () => {
        setImage(red);
        handleImageChange();
    };
    const handleYellowButtonClick = () => {
        setImage(yellow);
        handleImageChange();
    };
    const handleBlueButtonClick = () => {
        setImage(blue);
        handleImageChange();
    };
    const [isImageAnimating, setImageAnimating] = useState(false); // State to control animation
    const handleImageChange = () => {
        setImageAnimating(true);
        setTimeout(() => {
            setImageAnimating(false);
        }, 700); // Adjust the timeout to match your CSS transition time
    };
  return (
    <div className='HomeMainContainer'>
        <div className="textContainer">
            <div className="headerText">
                <p className='heading'>
                    Experience & Enjoy the patato in new flavors
                </p>
                <p className='subheading'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, aperiam repudiandae. Omnis neque praesentium ipsa sapiente architecto totam, enim sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, accusantium.
                </p>
                <button className='buybutton'>
                    Place a Order
                </button>
            </div>
            <div className="CompanyReachText">
                <div className="ChildContainer">
                    <p className="digits">7 million+</p>
                    <p className='ordersText'>Satisfied <br /> Customers</p>
                </div>
                <div className="ChildContainer">
                    <p className="digits">30 million+</p>
                    <p className='ordersText'>Completed <br /> Orders</p>
                </div>
            </div>
        </div>
        <div className="imageContainer">
            <div className="chipspacket">
                <img src={image} alt="" className={`chipspacketimage1 ${isImageAnimating ? 'image-enter-active' : ''}`}/>
                <img src={image} alt="" className={`chipspacketimage2 ${isImageAnimating ? 'image-enter-active2' : ''}`}/>
            </div>
            <div className="buttonsContainer">
            <div className="minibuttonContainer">
                    <button className={`chipsButton yellow ${image === yellow ? 'activeButton' : ''}`} onClick={handleYellowButtonClick}></button>
                    <button className={`chipsButton red ${image === red ? 'activeButton' : ''}`} onClick={handleRedButtonClick}></button>
                    <button className={`chipsButton blue ${image === blue ? 'activeButton' : ''}`} onClick={handleBlueButtonClick}></button>
                    <button className={`chipsButton green ${image === green ? 'activeButton' : ''}`} onClick={handleGreenButtonClick}></button>
                </div>
                <p className="buttonContext">
           <span className='sufflesvg'> <svg height="1.7em" viewBox="0 0 512 512"><path d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"/></svg> </span>&nbsp;
            Change Flavors
            </p>
            </div>
            
        </div>
    </div>
  )
}
