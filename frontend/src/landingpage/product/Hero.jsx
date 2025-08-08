import React from "react";
import Rightimage from "./Rightimage";
import Leftimage from "./Leftimage";
import Openacount from "../Openacount";
function Hero() {
    return (
        <div className="container text-center p-5">
            <div className="p-3">
                <h1>Stockpro Products</h1>
                <h3>Sleek, modern, and intuitive trading platforms</h3>
                <p>Check out our <a href="" style={{ textDecoration: "none" }}>investment offerings →</a></p>
            </div>
            <hr />
            <Rightimage img="https://res.cloudinary.com/dop3yq9to/image/upload/v1754677092/signup_veszeb.png" name="Kite"
                description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                link1="Try demo → "
                link2="Learn more  →"
                playstore="https://res.cloudinary.com/dop3yq9to/image/upload/v1754677088/googlePlayBadge_c9wr0q.svg"
                google="https://res.cloudinary.com/dop3yq9to/image/upload/v1754677086/appstoreBadge_jqpz0r.svg" />

            <Leftimage img="https://res.cloudinary.com/dop3yq9to/image/upload/v1754677087/console_kmy08o.png"
                name="Console"
                description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                link1="Learn more → "
            />
            <Rightimage
                img="https://res.cloudinary.com/dop3yq9to/image/upload/v1754677087/coin_iqjo3w.png"
                name="Coin"
                description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                link1="Coin → "
              playstore="https://res.cloudinary.com/dop3yq9to/image/upload/v1754677088/googlePlayBadge_c9wr0q.svg"
                google="https://res.cloudinary.com/dop3yq9to/image/upload/v1754677086/appstoreBadge_jqpz0r.svg" />
            <Leftimage
                img="https://res.cloudinary.com/dop3yq9to/image/upload/v1754677086/kiteconnect_o2vucm.png"
                name="Kite Connect API"
                description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                link1="Kite Connect →
              "
            />

            <Rightimage
                img="https://res.cloudinary.com/dop3yq9to/image/upload/v1754677093/varsity_kk3efw.png"
                name="Varsity mobile"
                description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go"
                playstore="https://res.cloudinary.com/dop3yq9to/image/upload/v1754677088/googlePlayBadge_c9wr0q.svg"
                google="https://res.cloudinary.com/dop3yq9to/image/upload/v1754677086/appstoreBadge_jqpz0r.svg" />
            <Openacount/>
        </div>
    )
}
export default Hero;