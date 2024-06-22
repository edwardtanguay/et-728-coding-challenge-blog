import { useState } from "react";
import { BlogEntry } from "../types";
import _initialBlogEntries from "../data/blogEntries.json";

const initialBlogEntries = _initialBlogEntries.sort((a, b) => a.date > b.date ? 1 : -1);

export const PageBlog = () => {
	const [blogEntries, setBlogEntries] =
		useState<BlogEntry[]>(initialBlogEntries);

	return (
		<>
			{blogEntries.map((blogEntry, index) => {
				return (
					<div key={index} className="blogEntry">
						<div className="date">{blogEntry.date}</div>
						<div className="title">{blogEntry.title}</div>
						<div className="tags">{blogEntry.tags.join(' ')}</div>
						<div className="body">{blogEntry.body}</div>
					</div>
				);
			})}
		</>
	);
};
