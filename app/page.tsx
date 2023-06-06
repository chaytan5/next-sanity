import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
	const projects = await getProjects();

	return (
		<div className="max-w-7xl mx-auto py-20">
			<h1 className="text-6xl font-extrabold">Hey there, I&apos;m <span className="bg-gradient-to-r from-red-500 to-violet-500 bg-clip-text text-transparent">Chetan!</span></h1>
			<p className="mt-2 text-2xl text-slate-700">Hola everyone! check out my projects</p>
			<h2 className="text-4xl text-emerald-800 font-bold mt-20">My Projects</h2>
			<div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
				{projects?.map((project) => (
					<Link href={`/projects/${project.slug}`} className="border-2 border-slate-400 shadow-md rounded-lg p-4 hover:border-blue-400 hover:shadow-xl transition" key={project._id}>
						{project.image && <Image src={project.image} alt={project.name} width={450} height={100} className="object-cover mx-auto rounded-lg border border-slate-400" />}
						<h3 className="mt-4 text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-2xl font-semibold bg-clip-text text-transparent">{project.name}</h3>
					</Link>
				))}
			</div>
		</div>
	);
}
