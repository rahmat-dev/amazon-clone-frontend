import React from "react";
import { Product } from "../../components";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            title="HP 62XL | Ink Cartridge | Black | C2P05AN"
            price="39.89"
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/41hKAPQIznL._AC_US160_.jpg"
          />
          <Product
            title="HP 63 | Ink Cartridge | Tri-color | F6U61AN"
            price="28.89"
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Ty3sjgtbL._AC_US160_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            title="Samsung 860 EVO 500GB 2.5 Inch SATA III Internal SSD (MZ-76E500B/AM)"
            price="109.99"
            rating={5}
            image="https://m.media-amazon.com/images/I/814poe+IDsL._AC_UL320_.jpg"
          />
          <Product
            title="Corsair Vengeance LPX 16GB (2x8GB) DDR4 DRAM 3200MHz C16 Desktop Memory Kit - Black"
            price="79.99"
            rating={4}
            image="https://m.media-amazon.com/images/I/51kHiPeTSmL._AC_UL320_.jpg"
          />
          <Product
            title="Crucial P1 1TB 3D NAND NVMe PCIe Internal SSD, up to 2000MB/s - CT1000P1SSD8"
            price="104.99"
            rating={4}
            image="https://m.media-amazon.com/images/I/61uqrREgItL._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)"
            price="278.99"
            rating={5}
            image="https://m.media-amazon.com/images/I/81Wt3h7-V2L._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
