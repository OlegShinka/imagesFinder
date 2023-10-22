import { ModalWindow } from 'components/Modal/Modal';
import { useState } from 'react';
import { Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, alt, srcLarge, src }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <li onClick={openModal} key={id}>
        <Image src={src} alt={alt} width="300" />
      </li>
      <ModalWindow
        status={isOpen}
        close={closeModal}
        src={srcLarge}
        alt={alt}
      />
    </div>
  );
};
