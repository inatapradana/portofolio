import { Link } from '@inertiajs/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick.theme.css";

export default function Carousel({
    // active = false,
    // className = '',
    // children,
    // ...props
}) {
    const settings = {
        className: 'bg-white rounded-lg px-5',
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        speed: 1000,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    return (
        <Slider {...settings}>
            <div className='py-5 my-5'>
                <img className="img-fit" src={"../../storage/images/produk/ban0.jpg"} alt="" />
                <h1 className='my-4 text-xl font-semibold'>O que é Lorem Ipsum?</h1>
                <p className='my-4 text-sm'>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
                <Link href="#"
                    className="w-full text-center rounded-md bg-main px-3 py-2 text-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    <i className='fas fa-magnifying-glass px-1'></i>Read More</Link>
            </div>
            <div className='py-5 my-5'>
                <img className="img-fit" src={"../../storage/images/produk/ban1.jpg"} alt="" />
                <h1 className='my-4 text-xl font-semibold'>O que é Lorem Ipsum?</h1>
                <p className='my-4 text-sm'>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
                <Link href="#"
                    className="w-full text-center rounded-md bg-main px-3 py-2 text-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    <i className='fas fa-magnifying-glass px-1'></i>Read More</Link>
            </div>
            <div className='py-5 my-5'>
                <img className="img-fit" src={"../../storage/images/produk/ban2.jpg"} alt="" />
                <h1 className='my-4 text-xl font-semibold'>O que é Lorem Ipsum?</h1>
                <p className='my-4 text-sm'>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
                <Link href="#"
                    className="w-full text-center rounded-md bg-main px-3 py-2 text-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    <i className='fas fa-magnifying-glass px-1'></i>Read More</Link>
            </div>
            <div className='py-5 my-5'>
                <img className="img-fit" src={"../../storage/images/produk/ban3.jpg"} alt="" />
                <h1 className='my-4 text-xl font-semibold'>O que é Lorem Ipsum?</h1>
                <p className='my-4 text-sm'>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
                <Link href="#"
                    className="w-full text-center rounded-md bg-main px-3 py-2 text-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    <i className='fas fa-magnifying-glass px-1'></i>Read More</Link>
            </div>
            <div className='py-5 my-5'>
                <img className="img-fit" src={"../../storage/images/produk/ban4.jpg"} alt="" />
                <h1 className='my-4 text-xl font-semibold'>O que é Lorem Ipsum?</h1>
                <p className='my-4 text-sm'>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
                <Link href="#"
                    className="w-full text-center rounded-md bg-main px-3 py-2 text-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    <i className='fas fa-magnifying-glass px-1'></i>Read More</Link>
            </div>
            <div className='py-5 my-5'>
                <img className="img-fit" src={"../../storage/images/produk/ban5.jpg"} alt="" />
                <h1 className='my-4 text-xl font-semibold'>O que é Lorem Ipsum?</h1>
                <p className='my-4 text-sm'>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
                <Link href="#"
                    className="w-full text-center rounded-md bg-main px-3 py-2 text-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    <i className='fas fa-magnifying-glass px-1'></i>Read More</Link>
            </div>
        </Slider>

    )
}