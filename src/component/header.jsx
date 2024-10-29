// components/BackgroundImage.js

export default function BackgroundImage() {
  return (
    <div
      className="h-[300px] sm:h-[400px] md:h-[400px] lg:h-[500px]   flex items-center justify-center"
      style={{
        
        backgroundImage: 'url(/image/maharaju.png)', // Update this path as necessary
        backgroundSize: 'cover',
        backgroundPosition: 'top center', // Adjusted to show the top of the image
        backgroundRepeat: 'no-repeat',
        margin : '50px 40px 0px' 
      }}
    >
      <div className="max-w-[900px] w-full flex items-center justify-center"> {/* Adjusted width */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center">
          Contact Us
        </h1>
      </div>
    </div>
  );
}
