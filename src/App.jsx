import React from 'react';


const MyComponent = () => {
  return (
    <>
    <div className="content-container" style={{backgroundImage: "url('./image/Capture.PNG')", backgroundSize: 'cover', backgroundPosition: 'left', width: '1440px', height: '468px', top: '-5px', gap: '0px', opacity: '0px'}}>
        </div>
        <main className='pt-4 pl-4'>
          <div className=''>
        <h5 className="text-red-500" >About Himalayan Fair Reisen</h5>
        <h1>Best Trekking Partner For your <br/>holidays</h1>
        </div>
        <div className="flex">
        
  <p className="mr-4">At Himalayan Fair Reisen, safety is paramount. Our guides are trained in wilderness first aid and possess the expertise to navigate the rugged Himalayan terrain safely. Moreover, we prioritize responsible tourism, . Whether you dream of standing atop the world's highest peaks, immersing yourself in the vibrant cultures of Himalayan villages, or simply escaping the hustle and bustle of daily life, Himalayan Fair Reisen is here to transform your dreams into reality. Join us on an unforgettable adventure and discover the enchanting beauty of the Himalayas with Himalayan Fair Reisen. With our dedicated team of experienced guides and a passion for exploration, we're committed to providing personalized and immersive adventures that cater to all levels of trekkers.</p>
  <img src="./image/rectangle 11.png" alt="Your Image" className="max-w-full h-auto" />
</div>
</main>
        <div className="flex pt-2" >
        <img src="./image/why-choose us.png" alt="Your Image" className="max-w-full h-auto"  />
        </div>

        <footer className="bg-gray-800 text-white py-24 px-4 text-center">
          <img src="./image/footer.png"/>
        </footer>
        
        </>  
  );
};

export default MyComponent;
