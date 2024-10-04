import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarComp({ image, alt }: { image: string; alt: string }) {
  return (
    <Avatar>
      <AvatarImage
        src={image || "https://github.com/shadcn.png"}
        alt={alt || "picture"}
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
