import Image from "next/image";
import type { Project } from "@/types";

interface Props {
  project: Project;
  activeImage: string;
  onSelect: (img: string) => void;
}

export function ModalGallery({ project, activeImage, onSelect }: Props) {
  return (
    <>
      <div className="relative aspect-video w-full bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden shadow-inner">
        <Image
          src={activeImage || project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover object-top transition-all"
        />
      </div>

      {project.extraImages && (
        <div className="grid grid-cols-4 gap-2">
          {project.extraImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => onSelect(img)}
              className={`relative aspect-video rounded-lg overflow-hidden border transition-all cursor-pointer ${
                activeImage === img
                  ? "border-purple-500 scale-[0.98]"
                  : "border-zinc-800 opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </>
  );
}
