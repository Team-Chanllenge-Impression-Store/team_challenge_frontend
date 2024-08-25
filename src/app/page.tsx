import Image from "next/image";
import { Header } from "./UI/Header";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { CgUserAdd } from "react-icons/cg";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="w-full items-center justify-center font-mono text-sm lg:flex">
				<div className="relative w-full flex flex-col items-center h-screen p-6">
					{/* TODO: Change background */}
					<Image
						src="/background-header.jpeg"
						alt="logo"
						fill
						className="absolute"
					/>
					<div className="flex flex-col justify-between h-full w-full max-w-7xl z-10 pb-28">
						<Header />
						<section className="w-2/5 flex flex-col gap-7">
							<h1 className="text-6xl text-blue">Give emotions</h1>
							<p className="text-xl text-blue">
								Discover a world of unique adventures and unforgettable moments
								with our handpicked experience gifts. Whether it&apos;s an
								adrenaline-pumping adventure, a serene escape, or a unique
								activity, we have something special for everyone.{" "}
							</p>
						</section>
						<section className="w-full justify-between max-w-7xl z-10 flex gap-4">
							<div className="w-1/3 flex items-center relative">
								<CiLocationOn
									className="absolute ml-2 w-10"
									size={24}
									color="#646464"
								/>
								<input
									type="text"
									className="w-full border border-gray-400 rounded-sm p-3 pl-12"
									placeholder="Anywhere"
								/>
							</div>
							<div className="w-1/3 flex items-center relative">
								<MdOutlineCalendarMonth
									className="absolute ml-2 w-10"
									color="#646464"
									size={24}
								/>
								<input
									type="text"
									className="w-full border border-gray-400 rounded-sm p-3 pl-12"
									placeholder="Anytime"
								/>
							</div>
							<div className="w-1/3 flex items-center relative">
								<CgUserAdd
									className="absolute ml-2 w-10"
									size={24}
									color="#646464"
								/>
								<input
									type="text"
									className="w-full border border-gray-400 rounded-sm p-3 pl-12"
									placeholder="Who’s coming?"
								/>
							</div>
							<div className="flex justify-center items-center gap-4 py-2 px-11 rounded-sm bg-blue text-white text-xl font-normal">
								<CiSearch size={24} color="white" />
								Search
							</div>
						</section>
					</div>
				</div>
			</div>
		</main>
	);
}
