import Image from "next/image";


export default function Hero(){

return(

<section className="
relative
min-h-screen
flex
items-center
overflow-hidden
bg-[#111111]
">


<div className="
relative
z-10
mx-auto
max-w-7xl
px-8
grid
md:grid-cols-2
gap-10
items-center
">


<div className="text-white">


<h1 className="
text-5xl
md:text-7xl
font-semibold
leading-tight
">

Electric Mobility
<br/>
Built for Real Work.

</h1>


<p className="
mt-8
max-w-xl
text-lg
text-gray-300
">

Reliable electric vehicles designed
for delivery, fleet operations
and commercial mobility worldwide.

</p>



<div className="mt-10 flex gap-5">


<button
className="
bg-[#00B894]
px-8
py-4
rounded-full
text-black
font-medium
"
>
Explore Products
</button>


<button
className="
border
border-white
px-8
py-4
rounded-full
"
>
Become Partner
</button>


</div>


</div>



<div>

<Image

src="/images/hero/hero-main.webp"

alt="KIMI Delivery Motorcycle"

width={900}

height={700}

className="object-contain"

/>

</div>



</div>


</section>


)

}