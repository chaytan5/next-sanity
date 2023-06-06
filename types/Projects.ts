import { PortableTextBlock } from "sanity";

export type Project = {
	_id: string;
	_createdAt: string;
	name: string;
	image: string;
	url: string;
	slug: string;
	content: PortableTextBlock[];
};
