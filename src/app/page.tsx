import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className='text-3xl w-1/2 px-11'>
        <Image 
        src={"/pictures/facebook.svg"} 
        width={300} 
        height={100} 
        alt='Facebook Logo'/>

        <p className='ml-8 -mt-3'>
          Facebook helps you connect and share with the people in your life.
        </p>
        </div>

      <div className='bg-white flex flex-col p-2 rounded-xl text-lg w-1/3'>
        <input className='focus:outline-1 outline-blue-400 my-2 mx-2 first-letter:border-1 border-gray-200 p-3 rounded-md' type='text' placeholder='Email address or phone number' />
        <input className='focus:outline-1 outline-blue-400 my-2 mx-2 border-1 border-gray-200 p-3 rounded-md' type='password' placeholder='password' />
        <button className='bg-blue-600 text-white my-2 mx-2 py-2 px-2 rounded-md
         font-bold hover:bg-blue-700'>Log in</button>
         <p className='cursor-pointer text-center text-blue-500 text-sm my-2 hover:underline'>Forgotten password?</p> 
        <span className='my-2'>
          <hr/>
        </span>
        <button className='bg-green-500 text-white my-2 py-2 px-3 w-fit rounded-md
         font-bold hover:bg-green-600 mx-auto'>Create new account</button>
      </div>

    </div>
    
   
  );
}