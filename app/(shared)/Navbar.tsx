import Image from "next/image";
import Link from "next/link";
import Ad1 from "public/assets/ad-1.jpg";
import SocialLinks from "./SocialLinks";

type Props = {};

const Navbar = (props: Props) => {
    const justifyBetween = "flex justify-between items-center"
    return (
        <header className="mb-5">
            <nav className={`${justifyBetween} w-full bg-wh-900 text-wh-10 px-10 py-4`}>
                <div className="hidden sm:block">
                    <SocialLinks />
                </div>
                <div className={`${justifyBetween} gap-10`}>
                    <Link href="/">Home</Link>
                    <Link href="/">Trending</Link>
                    <Link href="/">About</Link>
                </div>
                <div>
                    <p>Sing In</p>
                </div>
            </nav>
            <div className={`${justifyBetween} gap-8 mt-5 mb-4 mx-10`}>
                <div className=" basis-2/3 md:mt-3">
                    <h1 className="font-bold text-3xl md:text-5xl text-center sm:tracking-widest">BLOG THE FUTURE</h1>
                    <p className="text-sm sm:text-lg text-center mt-3 sm:tracking-widest">Blog dedicated towards AI and generation </p>
                </div>
                <div className="basis-full relative w-auto h-32 bg-wh-300 rounded-lg text-center">
                    <Image
                        src={Ad1}
                        alt='Tech'
                        fill
                        placeholder='blur'
                        sizes="(max-width:480px) 100vw,
                           (max-width:768px) 75vw,
                           (max-width:1060px) 50vw,
                            33vw"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
            <hr className="border-1 shadow-sm shadow-wh-500 mx-10" />
        </header>
    );
};

export default Navbar;
