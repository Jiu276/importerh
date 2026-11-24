import Image from "next/image";
import type { ContentBlock } from "@/data/articles";

export default function ArticleBody({ content }: { content: ContentBlock[] }) {
  return (
    <div className="prose-article">
      {content.map((block, index) => {
        if (block.type === "p") {
          return <p key={index}>{block.text}</p>;
        }
        if (block.type === "h2") {
          return <h2 key={index}>{block.text}</h2>;
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={index}
              className="my-8 border-l-2 border-copper pl-5 font-serif text-2xl leading-snug text-ink"
            >
              {block.text}
              {block.cite ? (
                <cite className="mt-3 block font-sans text-sm not-italic text-muted">
                  — {block.cite}
                </cite>
              ) : null}
            </blockquote>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={index} className="mb-6 list-disc space-y-2 pl-5 text-[0.98rem] leading-relaxed text-ink/80">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <figure key={index} className="my-8 overflow-hidden rounded-2xl">
            <div className="relative aspect-[16/10]">
              <Image
                src={block.src}
                alt={block.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 720px, 100vw"
              />
            </div>
            {block.caption ? (
              <figcaption className="bg-paper-deep/50 px-4 py-3 text-sm text-muted">
                {block.caption}
              </figcaption>
            ) : null}
          </figure>
        );
      })}
    </div>
  );
}
