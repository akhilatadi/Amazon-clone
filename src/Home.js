import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920"
          alt=""
        />

        <div className="home_row">
          <Product
            id="1234567"
            title="The psychology of Money"
            price={29}
            image="https://images-na.ssl-images-amazon.com/images/I/81Lb75rUhLL.jpg"
            rating={5}
          />
          <Product 
              id="1234568"
            title="Crime junkie podcast"
            price={499}
            image="https://i.scdn.co/image/ab6765630000ba8acdd7528c2e60fd939ebda2ea"
            rating={5}  
          />
        </div>

        <div className="home_row">
          <Product 
              id="1234768"
            title="Hanging plants"
            price={24}
            image="https://www.rockindeco.com/wp-content/uploads/2017/09/Home-Plants-25.jpg"
            rating={4}
          />
          <Product 
                id="1234778"
            title="Flounce Sleeve Swiss Dot Blouse"
            price={25}
            image="https://img.ltwebstatic.com/images3_pi/2021/08/19/16293674559260c5c0924a173bd51787cb997672cf_thumbnail_900x.webp"
            rating={5}
          />
          <Product 
                id="1234768"
            title="Artificial Ivy Gardland for Home Decoration"
            price={11}
            image="https://m.media-amazon.com/images/I/91i6ESbHhGL._AC_SL1500_.jpg"
            rating={4}
          />
          
        </div>

        <div className="home_row">
          <Product 
               id="1734568"
            title="Iphone 13 phone case"
            price={14}
            image="https://img.ltwebstatic.com/images3_pi/2021/08/31/1630380334431bca2591f1f0da8002d5f84e916cd5_thumbnail_900x.webp"
            rating={5}  
          />
         <Product 
               id="17345568"
            title="High Waist Fold PLeated Corduroy Pants"
            price={17}
            image="https://img.ltwebstatic.com/images3_pi/2021/10/07/1633539118ba088b81f04c716617d0393379b13b37_thumbnail_900x.webp"
            rating={5}  
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
