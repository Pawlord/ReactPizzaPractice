import React from "react"
import ContentLoader from "react-content-loader"

const PizzaBlockSkeleton = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="168" y="434" rx="0" ry="0" width="0" height="1" />
        <circle cx="127" cy="139" r="125" />
        <rect x="-5" y="276" rx="10" ry="10" width="280" height="27" />
        <rect x="-1" y="316" rx="10" ry="10" width="280" height="95" />
        <rect x="-1" y="428" rx="10" ry="10" width="90" height="30" />
        <rect x="145" y="421" rx="25" ry="25" width="135" height="45" />
    </ContentLoader>
)

export default PizzaBlockSkeleton