import Image from "next/image";
import { Header } from "./UI/Header";

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
					<div className=" w-full justify-between max-w-7xl z-10">
						<Header />
						<section className="w-2/5">
							<h1 className="text-3xl">Give emotions</h1>
							<p>
								Discover a world of unique adventures and unforgettable moments
								with our handpicked experience gifts. Whether it's an
								adrenaline-pumping adventure, a serene escape, or a unique
								activity, we have something special for everyone.{" "}
							</p>
						</section>
						<section>
							{/* TODO: Customize inputs */}
							<input type="text" />
							<input type="text" />
							<input type="text" />
							<button type="submit">search</button>
						</section>
					</div>
				</div>
			</div>
		</main>
	);
}
