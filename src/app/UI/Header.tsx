import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { FiUser } from "react-icons/fi";

export const Header = () => {
	return (
		<div className="flex flex-row items-center w-full justify-between">
			<div className="flex flex-row gap-1 justify-center items-center font-medium size-9 h-12 w-36">
				<div className="h-12 w-12 relative">
					<Image src="/Logo.svg" alt="logo" fill />
				</div>
				Gifts
			</div>
			<ul className="flex flex-row justify-center items-center gap-10">
				<li>Categories</li>
				<li>How we work</li>
				<li>About us</li>
			</ul>
			<ul className="flex flex-row justify-center items-center gap-4">
				<li>
					{/* TODO: Create search field */}
					search
				</li>
				<li>
					{/* TODO: Add colors for icons*/}
					<FaRegHeart size={24} className="border-blue" />
				</li>
				<li>
					<PiShoppingCart size={24} />
				</li>
				<li className="border-2 border-blue py-3 px-6 text-black rounded-sm">
					Sign In
				</li>
				<li className="border-2 border-blue py-3 px-6 text-white rounded-sm bg-blue">
					Sign Up
				</li>
				<li>
					<FiUser size={24} />
				</li>
			</ul>
		</div>
	);
};
