import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function SectionMen() {
  
  return (
    <div className={styles.container}>
    <Head>
      <title>Kampa Premier - Men</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="https://cdn.shopify.com/s/files/1/0384/3676/5828/files/logo_negro.png?v=1589160528" />
      <link rel="preconnect" href="https://app.snipcart.com" />
      <link rel="preconnect" href="https://cdn.snipcart.com" />
      <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
    </Head>

    <body className="flex flex-col">
    <div class="hidden flex-row fixed top-16 mt-4 pt-0 pb-0 opacity-100 text-white text-center text-sm inset-x-0 bg-green-500 py-2 shadow-xl z-20">New Arrivals </div>
    <nav>   
        
      <div class="flex-row fixed top-0 inset-x-0 bg-gray-100 py-2.5 md:py-1 lg:py-1 px-2 shadow-xl z-10">
  
          <a className="cursor-pointer"> 
              <Link href="/">
              <img class="flex-auto inline-block" oncontextmenu="return false;" src="https://cdn.shopify.com/s/files/1/0384/3676/5828/files/logo_negro.png?v=1589160528" alt="developer desk" style={{width: '9%', height: '9%',  position: 'relative'}}></img>    
              </Link>
           </a>

          <a id="dropdown-btn" class="bg-yellow-400 hover:bg-yellow-300 text-gray-800 cursor-pointer font-extrabold float-right block md:hidden lg:hidden py-2 px-3 -mt-0.5 rounded dark:bg-white cursor-default"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
          </a>
  
          <div id="dropdown-bar" class="dropdown-bar">
  
              <a href="index.html">
              <h1 class="text-xl bg-gray-800 hover:bg-gray-700 text-yellow-400 rounded text-center py-2 mt-3 shadow-md mx-2 cursor-pointer transition-colors transition duration-300">             
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-fill inline-block -mr-2 -mt-2" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg> About</h1>
              </a>
  
              <a href="">
              <h1 class="text-xl bg-gray-800 hover:bg-gray-700 text-yellow-400 rounded text-center py-2 mt-3 shadow-md mx-2 cursor-pointer transition-colors transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chat-square-dots-fill inline-block -mr-1.5 -mt-0.5" viewBox="0 0 16 16">
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  </svg> Contact</h1>
              </a>
  
              <a href="">
                  <h1 class="text-xl bg-gray-700 hover:bg-gray-700 text-yellow-400 rounded text-center py-2 mt-3 shadow-md mx-2 cursor-pointer transition-colors transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-archive-fill inline-block -mr-1.5 -mt-0.5" viewBox="0 0 16 16">
                      <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
                  </svg> Projects</h1>
              </a>
          </div>
          
          <h1 className="title bg-gray-100 hover:bg-gray-200 padding-menu px-5 rounded hidden md:inline-block lg:inline-block xl:inline-block">
            <Link href="/releases" as="/">
              <a>New Releases</a>
            </Link>
          </h1>
  
          <h1 className="title bg-gray-100 hover:bg-gray-200 padding-menu px-5 rounded hidden md:inline-block lg:inline-block xl:inline-block">
            <Link href="/men">
              <a>Men</a>
            </Link>
          </h1>

          <h1 className="title bg-gray-100 hover:bg-gray-200 padding-menu px-5 rounded hidden md:inline-block lg:inline-block xl:inline-block">
            <Link href="/women">
              <a>Women</a>
            </Link>
          </h1>

          <h1 className="title bg-gray-100 hover:bg-gray-200 padding-menu px-5 rounded hidden md:inline-block lg:inline-block xl:inline-block">
            <Link href="/kids">
              <a>Kids</a>
            </Link>
          </h1>

          <h1 className="title bg-gray-100 hover:bg-gray-200 padding-menu px-5 rounded hidden md:inline-block lg:inline-block xl:inline-block">
            <Link href="/releases">
              <a>New Releases</a>
            </Link>
          </h1>

          <a className="snipcart-checkout snipcart-summary inline-block float-right my-6 mx-6" href="#" style={{textDecoration: "none"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="17.5" fill="currentColor" class="bi bi-cart2 float-left my-0.5 mx-0.5" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
          </svg>
          <strong></strong> <span className="snipcart-total-price">$0.00</span>
        </a>
      </div>

      </nav>

    <main className={styles.main}>

      <img src="https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.6435-9/83030637_3222022397814756_6641094070498230272_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=gb3O28tCZgcAX-Rh8vS&_nc_ht=scontent.fyyz1-1.fna&oh=00_AT8Zc1KYDnIzxxkW_LkL7CZkFJQpica93mCE8FMxCw4N2A&oe=61ED7721" className='pt-5 rounded-b-2xl' style={{width: '2000px', height: '580px', objectFit:'cover'}}></img>

      <div className="flex place-self-start">
      <p className="pt-7 font-semibold text-4xl pb-6"> Men's Football Boots </p>
      </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">

  <div class="product-container">
      <a className="product-container-new"></a>
      <img src="https://i.postimg.cc/5tNk159G/kampa-balam-grn.png"></img>
      <h1 className="text-xl pl-4 font-semibold opacity-60">Kampa Balam Neon Green - Men</h1>
      <p className="text-xl pl-4 opacity-60">Firm-Ground Football Boots</p>
      <p className="text-xl pl-4 opacity-60 mb-2">$75.00</p>
  </div>
  
  <div class="product-container">
      <a className="product-container-new"></a>
      <img src="https://cdn.shopify.com/s/files/1/0384/3676/5828/products/1000x500_BAL_NNN_01_ebb92f8c-698f-4d86-b6ea-69cfaf4affc6.jpg?v=1591580953"></img>
      <h1 className="text-xl pl-4 font-semibold opacity-60">Kampa Balam Neon Orange - Men</h1>
      <p className="text-xl pl-4 opacity-60">Firm-Ground Football Boots</p>
      <p className="text-xl pl-4 opacity-60 mb-2">$75.00</p>
  </div>

  <div class="product-container">
      <a className="product-container-bestseller"></a>
      <a className="product-container-sale my-8"></a>
      <img src="https://cdn.shopify.com/s/files/1/0384/3676/5828/products/1000x500_COS_ARN_01_47565fed-dc86-4c43-a472-e9ffc3bd57f1.jpg?v=1592539650"></img>
      <h1 className="text-xl pl-4 font-semibold opacity-60">Kampa Cosmos Blue - Men</h1>
      <p className="text-xl pl-4 opacity-60">Firm-Ground Football Boots</p>
      <p className="text-xl pl-4 opacity-60 mb-2">$65.00</p>
  </div>

  <div class="product-container">
      <img src="https://cdn.shopify.com/s/files/1/0384/3676/5828/products/1000x500_ELI_NB_01_a7c98175-f425-4ad3-b7a8-81e3fd0b00b0.jpg?v=1592541260"></img>
      <h1 className="text-xl pl-4 font-semibold opacity-60">Kampa Elite Black - Men</h1>
      <p className="text-xl pl-4 opacity-60">Firm-Ground Football Boots</p>
      <p className="text-xl pl-4 opacity-60 mb-2">$75.00</p>
  </div>

  <div class="product-container">
      <img src="https://cdn.shopify.com/s/files/1/0384/3676/5828/products/1000x500_ELI_NB_TURF_01.jpg?v=1589166870"></img>
      <h1 className="text-xl pl-4 font-semibold opacity-60">Kampa Elite Black Turf - Men</h1>
      <p className="text-xl pl-4 opacity-60">Turf Football Boots</p>
      <p className="text-xl pl-4 opacity-60 mb-2">$65.00</p>
  </div>

  <div class="product-container">
      <a className="product-container-soldout"></a>
      <img src="https://cdn.shopify.com/s/files/1/0384/3676/5828/products/Viper04.jpg?v=1600177558"></img>
      <h1 className="text-xl pl-4 font-semibold opacity-60">Kampa Viper Neon - Men</h1>
      <p className="text-xl pl-4 opacity-60">Firm-Ground Football Boots</p>
      <p className="text-xl pl-4 opacity-60 mb-2">$55.00</p>
  </div>
  
</div>

<div className="flex place-self-start">
      <p className="pt-7 font-semibold text-4xl pb-6"> Men's Training Shoes </p>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">

<div class="product-container">
    <a className="product-container-bestseller"></a>
    <img src="https://cdn.shopify.com/s/files/1/0384/3676/5828/products/runnernegro3_8c9a75aa-b13f-48a6-a07b-798a47a629d5.jpg?v=1611884717"></img>
    <h1 className="text-xl pl-4 font-semibold opacity-60">Kampa Running Black - Men</h1>
    <p className="text-xl pl-4 opacity-60">Running Shoes</p>
    <p className="text-xl pl-4 opacity-60 mb-2">$75.00</p>
</div>

<div class="product-container">
    <img src="https://cdn.shopify.com/s/files/1/0384/3676/5828/products/runnerrojo3_b4b62b4e-c9a9-4074-9a57-d2d6afb3fa0a.jpg?v=1611884791"></img>
    <h1 className="text-xl pl-4 font-semibold opacity-60">Kampa Running Red - Men</h1>
    <p className="text-xl pl-4 opacity-60">Running Shoes</p>
    <p className="text-xl pl-4 opacity-60 mb-2">$55.00</p>
</div>

<div class="product-container">
    <a className="product-container-sale"></a> 
    <img src="https://cdn.shopify.com/s/files/1/0384/3676/5828/products/Sportnegro3_435df662-24d1-4bff-9d86-7de91f1c1fde.jpg?v=1611884756"></img>
    <h1 className="text-xl pl-4 font-semibold opacity-60">Kampa Sport Black - Men</h1>
    <p className="text-xl pl-4 opacity-60">Training Shoes</p>
    <p className="text-xl pl-4 opacity-60 mb-2">$55.00</p>
</div>

<div class="product-container">
    <a className="product-container-sale"></a> 
    <img src="https://cdn.shopify.com/s/files/1/0384/3676/5828/products/Sportrojo2_60d76266-6ea1-490c-bde6-9a3fe51eb2c5.jpg?v=1611884836"></img>
    <h1 className="text-xl pl-4 font-semibold opacity-60">Kampa Sport Red - Men</h1>
    <p className="text-xl pl-4 opacity-60">Training Shoes</p>
    <p className="text-xl pl-4 opacity-60 mb-2">$75.00</p>
</div>

</div>


<button class="snipcart-add-item"
data-item-id="starry-night"
data-item-price="79.99"
data-item-url="/paintings/starry-night"
data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
data-item-image="https://cdn.shopify.com/s/files/1/0384/3676/5828/products/Viper04.jpg?v=1600177558"
data-item-name="The Starry Night">
Add to cart
</button>


<img src="https://cdn.shopify.com/s/files/1/0384/3676/5828/files/kampa_canchapersonalizada.jpg?v=15924576416" className='pt-8' style={{width: '2000px', height: '480px', objectFit:'cover'}}></img>
    </main>

    <footer className={styles.footer}>
    <div class="text-xs opacity-30">
      <p class=" mt-3 text-center"> Powered by 
      <a href="http://yegax.com/"  > <u>Yegax Digital</u> </a> </p>
      <p class="text-center mb-2"> 2021 </p>
    </div>
    </footer>
    </body>
    <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
    <div hidden id="snipcart" data-api-key="YTZkNjk1MmEtMDhkNC00ODE3LTkyZjctZDY4NjY0MzY0ZDQ4NjM3NzU5MDI4Mjg4Mzc3NTg4" />
    <script src="mobile-dropdown.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.js"></script>
    <script src="https://combinatronics.com/yegax/web-portfolio-pvg/master/js/dropdown.js"></script>

  </div>

  )
}