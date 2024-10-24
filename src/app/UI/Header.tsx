import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

export const Header = () => {
	return (
		<div className="flex flex-row items-center w-full justify-between max-w-7xl z-10">
			<div className="flex flex-row gap-14">
				<div className="flex flex-row gap-1 justify-center items-center font-medium text-3xl h-12 w-36">
					<div className="h-12 w-12 relative">
						<Image src="/Logo.svg" alt="logo" fill />
					</div>
					Gifts
				</div>
				<ul className="flex flex-row justify-center items-center gap-10">
					<li className="font-medium text-xl">Categories</li>
					<li className="font-medium text-xl">How we work</li>
					<li className="font-medium text-xl">About us</li>
				</ul>
			</div>

			<ul className="flex flex-row justify-center items-center gap-4">
				<li className="relative flex items-center hidden">
					{/* TODO: Create search field */}
					<IoIosSearch
						size={24}
						className="absolute insert-y-0 start-0 flex items-center pointer-events-none"
					/>
					<input
						type="text"
						className="w-full h-10 rounded-md bg-gray-50 ps-10 focus: border-gray-200"
					/>
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
				<li className="hidden">
					<FiUser size={24} />
				</li>
			</ul>
		</div>
	);
};
