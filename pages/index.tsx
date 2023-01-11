import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import "@fontsource/dm-sans";

export default function Home() {
  return (
    <>
      <Head>
        <title>510 Books & Media</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="hero" className="relative text-[#ffffff] text-center">
        <div className={"absolute top-0 bottom-0 right-0 left-0"}>
          <img className={"w-full h-full object-cover object-bottom"} src={"/vintage-books-antique-book-pages.jpg"} />
        </div>
        <div className="relative z-10">
          <div className="flex flex-row mx-auto items-center justify-between px-[20px] md:mx-[51.5px] py-[10px]">
            <a href="/" className="DESKTOP-ICON hidden lg:flex md:py-[16px]">
              <img src="/510-books-Media-02-smaller-150x150.png" alt="logo" />
            </a>
            <a href="/" className="MOBILE-ICON flex lg:hidden py-[16px]">
              <img src="/cropped-510-books-Media-02-smaller-32x32.png" alt="logo" />
            </a>
            <nav>
              <section className="MOBILE-MENU flex lg:hidden">
                <div className="p-4 space-y-2 bg-[#FFD936] rounded-full shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </div>
              </section>
              <ul className="DESKTOP-MENU hidden lg:flex justify-center items-center">
                <li className="hover:border-b-2">
                  <a href="/" className="text-[16px] text-[#ffffff] px-[16px]">Home</a>
                </li>
                <li className="hover:border-b-2">
                  <a href="/" className="text-[16px] text-[#ffffff] px-[16px]">Services</a>
                </li>
                <li className="hover:border-b-2">
                  <a href="/" className="text-[16px] text-[#ffffff] px-[16px]">Contact</a>
                </li>
                <li className="pr-[10px] hover:border-b-2">
                  <a href="/" className="text-[16px] text-[#ffffff] px-[16px]">Free Book Pickups</a>
                </li>
                <li className="pl-[10px]">
                  <button className="py-[15px] px-[25px] rounded border border-[#ffffff]">
                    <span className="text-[16px] text-[#ffffff]">626-400-9294</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="container mx-auto xl:px-32 pt-6 md:pb-20 xl:pb-16">
            <div className="mx-auto items-center justify-between text-center md:mx-[101.5px]">
              <div className="flex flex-col p-[10px] justify-center items-center">
                <h1 className="text-[25px] md:text-[50px] text-[#ffffff] tracking-[-3px]">Welcome to...</h1>
                <h1 className="text-[43px] md:text-[86px] text-[#ffffff] tracking-[-3px] -mt-[24px]">510 Books & Media!</h1>
                <p className="text-[16px] text-[#ffffff]">Your Pomona book, music, movie, and game store destination.</p>
                <p className="text-[16px] text-[#ffffff]">Visit our local store for an awesome selection of books and media and</p>
                <p className="text-[16px] text-[#ffffff]">bring in your loved books and media for cash or credit.</p>
                <button className="flex flex-row text-[#54595F] px-[35px] py-[15px] mt-[40px] bg-[#FFD936] hover:bg-[#dab200] rounded-lg justify-center items-center w-[200px] h-[50px]">
                  <span className="text-[14px] font-bold mr-[8px]">
                    Visit Our Store
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="stores-services" className="relative text-[#536942] text-center py-[50px] md:py-[70px]">
        <div className="relative z-10">
          <div className="mx-auto p-[10px]">
            <h1 className="text-[40px] tracking-[-2px]">Our Stores & Services</h1>
            <div className="mx-auto border-b-4 border-[#FFD936] w-[90px] h-[20px]"></div>
            <div className="flex flex-col md:flex-row pt-[25px] justify-center">
              <div className="flex flex-col p-[15px] w-[344px]">
                <img src="/20220301_082812-scaled.jpg" className="max-w-full h-[210px] mb-[30px]" alt="Bonita Store Location Image" />
                <h1 className="text-[20px] text-start mb-[9px]">748 E Bonita Store</h1>
                <p className="text-[16px] text-start">Our first retail book and media store packed with over 13k books, CDs, vinyl records, DVDs, Blu-rays, video games, audiobooks and VHS/cassette tapes.</p>
              </div>
              <div className="flex flex-col p-[15px] w-[344px]">
                <img src="/pomona-bookstore-books.jpg" className="max-w-full h-[210px] mb-[30px]" alt="Pomona Location Image" />
                <h1 className="text-[20px] text-start mb-[9px]">155 W 2nd St Store (Arts Colony)</h1>
                <p className="text-[16px] text-start">OPENING SOON: Our second store located in the heart of the downtown Pomona Arts Colony is a bookstore with over 10k curated books.</p>
              </div>
              <div className="flex flex-col p-[15px] w-[344px]">
                <img src="/free-book-pick-up-service-southern-california.jpg" className="max-w-full h-[210px] mb-[30px]" alt="Book Pickup Service Image" />
                <h1 className="text-[20px] text-start mb-[9px]">Book & Media Pick-Up Service</h1>
                <p className="text-[16px] text-start">We will pick up your gently used books and media, including records, CDs, DVDs, video games etc. Let us do the packing, hauling and rehoming.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonial" className="relative text-[#536942] text-center bg-[#f6f8f5] pt-[35px] pb-[28px] md:py-[50px]">
        <div className="relative z-10 px-[25px] xl:px-[171px]">
          <div className="flex flex-col mx-auto py-[20px]">
            <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-[12px]">
              <path d="M20.6614 28.8167C20.6614 33.1133 16.7004 37.0402 11.7484 37.0402C3.56585 37.0402 0 30.9867 0 22.9061C0 13.6313 9.34862 4.68667 17.8304 0.959727L20.0961 4.60889C13.1077 7.99535 7.88433 12.5869 7.14413 20.2849H10.0352C13.1311 20.2849 16.3472 20.784 18.4942 23.0089C20.025 24.5976 20.6614 26.6202 20.6614 28.8167ZM46 28.8167C46 33.1133 42.0389 37.0402 37.087 37.0402C28.9044 37.0402 25.3385 30.9866 25.3385 22.9061C25.3385 13.6312 34.6872 4.68666 43.1689 0.959717L45.4346 4.60888C38.4462 7.99534 33.2229 12.5868 32.4827 20.2849C35.6358 20.2849 38.2518 20.1706 40.5819 21.0044C44.2108 22.3029 46 25.1081 46 28.8167Z" fill="#536941" />
            </svg>
            <h1 className="mx-auto text-[24px] md:text-[35px] tracking-[-2px] md:px-[80px] pt-[10px] pb-[20px] mb-[24px] font-serif">“Cool place, a mix of vintage records, cds, books and movies of all types. I had a fun time browsing and found some great indy music for very cheap prices.”</h1>
            <img src="/avatar_1.jpg" className="w-[50px] h-[50px] mx-auto mb-[12px]" alt="Testimonial Avatar" />
            <p className="text-[14px] text-[#52684080]">Mr. Smitty</p>
          </div>
        </div>
      </section>
      <section id="about" className="relative text-[#536942] py-[50px] md:py-[70px] px-[25px] md:px-[25px]">
        <div className="relative z-10 container md:w-[1343px] mx-auto">
          <div className="flex flex-col md:flex-row mx-auto lg:mx-[50px] justify-center items-canter">
            <div className="flex flex-col mx-auto md:py-[10px] lg:pl-[25px] md:pr-[35px]">
              <h2 className="text-[10px] md:text-[12px] text-[#536941B3]">ABOUT US</h2>
              <h1 className="text-[20px] md:text-[40px] font-serif">We've been selling books and media since 2019 right here in Pomona.</h1>
              <p className="text-[16px] text-[#536941CC] md:py-[20px]">It all started out online with reselling books, then CDs, records,  tapes, video games etc. soon after. Our first location on Bonita Ave opened in 2019 with once a month sales and thenin 2022 we switched to being open every week. We are now expanding to downtown Pomona with a stand alone bookstore.</p>
              <button className="py-[10px] px-[35px] mt-[8px] md:mt-[0px] w-[175px] h-[50px] rounded border border-[#536942] hover:border-[#9FCE00] hover:text-[#9FCE00]">
                <span className="text-[15px]">Find Out More</span>
              </button>
            </div>
            <div className="flex mx-auto mt-[12px] md:mt-[0px] lg:p-[10px] justify-center items-canter">
              <img src="/20220301_082945-scaled.jpg" className="max-w-full h-auto mb-[30px]" alt="Picture of one of the store locations" />
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="relative text-[#ffffff] text-center py-[12px] md:py-[80px]">
        <div className={"absolute top-0 bottom-0 right-0 left-0"}>
          <img className={"w-full h-full object-cover object-bottom"} src={"/leather-bound-vintage-books.jpg"} />
        </div>
        <div className="relative z-10">
          <div className="md:mx-[101.5px]">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[58px] text-[#ffffff] tracking-[-3px]">QUESTIONS?</h1>
              <p className="text-[17px] text-[#ffffff] mb-[20px]">If you have any questions please contact us through our <br></br>contact page.</p>
              <button className="flex flex-row text-[#536942] px-[35px] py-[15px] mt-[40px] bg-[#FFD936] hover:bg-[#dab200] rounded-lg justify-center items-center w-[200px] h-[50px]">
                <span className="text-[14px]">Let's Talk Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="footer" className="relative text-[#536942] text-center pt-[32px] pb-[15px] md:py-[30px]">
        <div className="relative z-10 container md:w-[1343px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 md:mx-[71.5px] md:gap-[50px] justify-items-center content-center">
            <div className="md:flex md:justify-center md:items-center">
              <ul className="md:flex md:flex-row space-y-[12px] md:space-y-[0px] md:gap-[12px]">
                <li className="hover:text-[#9FCE00]">
                  <a href="/" className="text-[16px]">Home</a>
                </li>
                <li className="hover:text-[#9FCE00]">
                  <a href="/" className="text-[16px]">Services</a>
                </li>
                <li className="hover:text-[#9FCE00]">
                  <a href="/" className="text-[16px]">Contact</a>
                </li>
                <li className="hover:text-[#9FCE00]">
                  <a href="/" className="text-[16px]">Free Book Pickups</a>
                </li>
              </ul>
            </div>
            <div>
              <a href="/" className="DESKTOP-ICON hidden lg:flex">
                <img src="/cropped-510-books-Media-02-smaller-180x180.png" alt="logo" />
              </a>
              <a href="/" className="MOBILE-ICON flex lg:hidden py-[16px]">
                <img src="/510-books-Media-02-smaller-150x150.png" alt="logo" />
              </a>
            </div>
            <div className="md:flex md:flex-row md:justify-center md:items-center md:space-y-[0px] md:gap-[8px]">Copyright © 2019 <a href="/" className="text-[#FFD936]">510books.com</a></div>
          </div>
        </div>
      </section>
    </>
  )
}
