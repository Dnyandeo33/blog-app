import Link from 'next/link';
import React from 'react';
import {
    BsDiscord,
    BsFacebook,
    BsGoogle,
    BsInstagram,
    BsTwitter,
} from 'react-icons/bs';

type Props = {
    isDark?: boolean
};

const SocialLinks = ({ isDark = false }: Props) => {
    return (
        <div className="flex justify-between items-center gap-7">
            <Link className={`${isDark ? "brightness-0" : ""} hover:opacity-50`} href="https://twitter.com" target="blank" rel="noreferrer">
                <BsTwitter />
            </Link>
            <Link className={`${isDark ? "brightness-0" : ""} hover:opacity-50`} href="https://facebook.com" target="blank" rel="noreferrer">
                <BsFacebook />
            </Link>
            <Link className={`${isDark ? "brightness-0" : ""} hover:opacity-50`} href="https://instagram.com" target="blank" rel="noreferrer">
                <BsInstagram />
            </Link>
            <Link className={`${isDark ? "brightness-0" : ""} hover:opacity-50`} href="https://discord.com" target="blank" rel="noreferrer">
                <BsDiscord />
            </Link>
            <Link className={`${isDark ? "brightness-0" : ""} hover:opacity-50`} href="https://google.com" target="blank" rel="noreferrer">
                <BsGoogle />
            </Link>
        </div >
    );
};

export default SocialLinks;
