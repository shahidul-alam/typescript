import { PropsWithChildren } from "react";
type imageInfo = PropsWithChildren<{ image: { src: string; alt: string } }>;

export default function Header({ image, children }: imageInfo) {
  return (
    <header>
        {/* <img src={image.src} alt={image.alt} /> */}
        <img {...image} />
        {children}
    </header>
  );
}
