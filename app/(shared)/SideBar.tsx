import Image from "next/image";
import React from "react";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";

type Props = {};

const Sidebar = (props: Props) => {
    return (
        <section>
            <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
                Subscribe and Follow
            </h4>
            <div className="my-5 mx-5">
                <SocialLinks isDark />
            </div>
            <Subscribe />
            Image
            <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
                About the Blog
            </h4>
            <div className="flex justify-center my-3">
                Image
            </div>
            <h4 className="py-3 px-5 text-wh-500 font-bold text-center">
                Dnyandeo Waghunde
            </h4>
            <p className="text-wh-500 text-center text-sm">
                Sit diam vel lacus tortor molestie amet tincidunt. Amet amet arcu sed
                facilisi
            </p>
        </section>
    );
};

export default Sidebar;