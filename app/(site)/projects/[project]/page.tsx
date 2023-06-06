import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
	params: { project: string };
};

export default async function Project({ params }: Props) {
	const slug = params.project;
	const project = await getProject(slug);

	return (
		<div>
			<header className="flex items-center justify-between">
				<h1 className="bg-gradient-to-r from-red-500 to-violet-500 bg-clip-text py-4 text-5xl font-extrabold text-transparent drop-shadow">
					{project?.name}
				</h1>

				<a
					className="whitespace-nowrap rounded-lg bg-gray-100 px-4 py-3 font-bold text-gray-700 transition hover:bg-rose-600 hover:text-gray-100"
					href={project.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					View Project
				</a>
			</header>

			<div className="mt-5 text-xl text-gray-700">
				<PortableText value={project.content} />
			</div>

			<Image
				src={project?.image}
				alt={project?.name}
				width={1920}
				height={1080}
				className="mt-5 rounded-xl border-2 border-gray-300 object-cover drop-shadow"
			/>
		</div>
	);
}
