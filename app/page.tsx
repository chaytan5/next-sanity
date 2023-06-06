import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
	const projects = await getProjects();

	return (
		<div className="mx-auto max-w-7xl py-20">
			<h1 className="text-6xl font-extrabold">
				Hey there, I&apos;m{" "}
				<span className="bg-gradient-to-r from-red-500 to-violet-500 bg-clip-text text-transparent">
					Chetan!
				</span>
			</h1>
			<p className="mt-2 text-2xl text-slate-700">
				Hola everyone! check out my projects
			</p>
			<h2 className="mt-20 text-4xl font-bold  text-yellow-800 underline">
				My Projects
			</h2>
			<div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
				{projects?.map((project) => (
					<Link
						href={`/projects/${project.slug}`}
						className="rounded-lg border-2 border-slate-400 p-4 shadow-md transition hover:border-blue-400 hover:shadow-xl"
						key={project._id}
					>
						{project.image && (
							<Image
								src={project.image}
								alt={project.name}
								width={450}
								height={100}
								className="mx-auto rounded-lg border border-slate-400 object-cover"
							/>
						)}
						<h3 className="mt-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-center text-2xl font-semibold text-transparent">
							{project.name}
						</h3>
					</Link>
				))}
			</div>
		</div>
	);
}
