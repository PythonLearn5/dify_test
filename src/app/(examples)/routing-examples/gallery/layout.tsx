type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function GalleryLayout({ children, modal }: Props) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
