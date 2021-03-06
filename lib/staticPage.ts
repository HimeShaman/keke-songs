import path from "path";
import fs from "fs";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";

const staticDirectory = path.join(process.cwd(), "pages", "static");

export async function getStaticFileData(filename: string) {
    const fullPath = path.join(staticDirectory, `${filename}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        filename,
        contentHtml,
        ...matterResult.data
    };
}
