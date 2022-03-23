import { ReactComponent as ScrimbaLogo } from './images/scrimba-logo.svg'
import { ReactComponent as HamburgerMenu } from './images/hamburger.svg'
import { ReactComponent as CssIcon } from './images/css-icon.svg'
import { ReactComponent as DeveloperIcon } from './images/developer-icon.svg'
import { ReactComponent as MobileIcon } from './images/mobile-icon.svg'
import TailwindLogo from './images/tailwindlogo.png'
import Svg from './components/Svg'

function App() {
  return (
    <div className='flex flex-col bg-gray-200 min-h-screen items-center'>
      <header className='w-full px-8 py-4 flex justify-center bg-indigo-700 border-b-4 border-pink-500'>
        <div className='w-full max-w-4xl'>
          <div className='flex justify-between'>
            <Svg component={ScrimbaLogo} color='text-pink-500' classes='w-32 h-16' />
            <button className='sm:hidden' type='button'>
              <Svg
                component={HamburgerMenu}
                color='text-gray-200 hover:text-red-300'
                classes='w-6 h-6'
              />
            </button>
          </div>
          <div>
            <h1 className='text-2xl text-indigo-100'>Want to learn Tailwind CSS?</h1>
            <p className='text-xs text-indigo-200'>
              Tailwind is the fastest growing utility-first CSS framework. Let's learn it step by
              step.
            </p>
            <div className='relative mt-4 flex'>
              <a
                href='https://www.google.com'
                className='text-xs uppercase font-bold bg-pink-500  px-3 py-2  text-indigo-100 rounded-full '>
                Enroll Now
              </a>
              <div className='absolute right-0 border-4 border-pink-500 rounded-full p-4 bg-indigo-100'>
                <img className='h-16 w-16' src={TailwindLogo} alt='tailwind-logo' />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className='w-full mt-16 flex flex-col items-center'>
        <div className='mx-8 max-w-4xl'>
          <h2 className='text-xl font-bold text-indigo-700 pb-1 border-b border-indigo-700'>
            How It Works
          </h2>
          <p className='text-gray-600 mt-3 text-xs'>
            Tailwind is designed for rapid development of modern applications. At its core, it is a
            robust mobile-first design system built with developer experience in mind. After using
            Tailwind CSS, you will find it difficult to go back to use anything else. Learn all
            about it in this all-inclusive course.
          </p>
          <h2 className='text-xl font-bold text-indigo-700 pb-1 mt-4'>Advantages</h2>
          <div className='flex flex-col max-w-4xl sm:flex-row mt-4 sm:-mx-2'>
            <div className='sm:w-1/3 flex flex-col items-center bg-white  p-8 mt-4  border-b-4 border-pink-500  rounded-lg sm:mx-2 sm:p-4 md:p-8'>
              <div className='flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full'>
                <Svg component={CssIcon} classes='w-12 h-12' color='text-indigo-700' />
              </div>
              <div className='mt-2 font-bold text-lg text-center'>No Custom CSS</div>
              <div className='mt-2 text-gray-600 text-sm text-center'>
                Tailwind's advanced class extraction will leave your project free of custom CSS.
              </div>
            </div>
            <div className='sm:w-1/3 flex flex-col items-center bg-white  p-8  mt-4  border-b-4 border-pink-500  rounded-lg sm:mx-2 sm:p-4 md:p-8'>
              <div className='flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full'>
                <Svg component={DeveloperIcon} classes='w-12 h-12' color='text-indigo-700' />
              </div>
              <div className='mt-2 font-bold text-lg text-center'>Developer Experience</div>
              <div className='mt-2 text-gray-600 text-sm text-center'>
                Tailwind is designed with your happiness in mind. The ease of performing changes is
                refreshing.
              </div>
            </div>
            <div className='sm:w-1/3 flex flex-col items-center bg-white p-8  mt-4  border-b-4 border-pink-500  rounded-lg sm:mx-2 sm:p-4 md:p-8'>
              <div className='flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full'>
                <Svg component={MobileIcon} classes='w-12 h-12' color='text-indigo-700' />
              </div>
              <div className='mt-2 font-bold text-lg text-center'>Mobile Friendly</div>
              <div className='mt-2 text-gray-600 text-sm text-center'>
                Modern applications demand mobile-friendly & Tailwind's responsive modifiers make it
                easy.
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className='w-full bg-gray-800 text-gray-600 pb-8 text-center font-light mt-16'>
        <div className='w-full py-8 flex flex-col items-center'>
          <h2 className='text-gray-300 text-xl font-bold pb-4 px-3'>
            Sign up to download the free PDF
          </h2>
          <form className='text-gray-200 w-full max-w-xl px-8 md:px-0' method='post' action='#'>
            <div className='flex flex-col text-sm md:flex-row md:-mx-2'>
              <label className='sr-only' htmlFor='firstName'>
                First Name
              </label>
              <input
                type='text'
                className='w-full border-2 bg-gray-700 border-gray-600 rounded-lg px-3 py-2  mt-3 md:mx-2 md:w-1/2'
                placeholder='First Name'
                id='firstName'
              />
              <label className='sr-only' htmlFor='lastName'>
                Last Name
              </label>
              <input
                type='text'
                className='w-full border-2 bg-gray-700 border-gray-600 rounded-lg px-3 py-2  mt-3 md:mx-2 md:w-1/2'
                placeholder='Last Name'
                id='lastName'
              />
            </div>
            <div className='flex flex-col text-sm md:flex-row md:-mx-2'>
              <label className='sr-only' htmlFor='email'>
                Your email
              </label>
              <input
                type='email'
                className='w-full border-2 bg-gray-700 border-gray-600 rounded-lg px-3 py-2  mt-3 md:mx-2 md:w-1/2'
                placeholder='ozan@gmail.com'
                id='email'
              />
              <label className='sr-only' htmlFor='title'>
                Your title
              </label>
              <input
                type='text'
                className='w-full border-2 bg-gray-700 border-gray-600 rounded-lg px-3 py-2  mt-3 md:mx-2 md:w-1/2'
                placeholder='Your title'
                id='title'
              />
            </div>
            <button
              type='submit'
              className='w-full text-white text-sm bg-blue-600 border rounded-lg mt-3 py-3 border-blue-600'>
              Create account
            </button>
          </form>
        </div>
        <p className='text-gray-400 text-xs'>Copyright © 2019 Scrimba</p>
      </footer>
    </div>
  )
}

export default App
