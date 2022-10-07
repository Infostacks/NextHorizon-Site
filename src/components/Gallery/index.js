/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../../utils/data.js";
import styles from "../../utils/GlobalStyles.js";

const index = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const CustomHeader = ({ innerProps, isModal }) =>
    isModal ? (
      <div {...innerProps} className="text-3xl text-center mb-10 text-white">
        Header Section.
        {photos.desc}
      </div>
    ) : null;
    const CustomFooter = ({ innerProps, isModal }) =>
    isModal ? (
      <div {...innerProps} className="text-3xl text-center mb-10 text-white">
        Header Section.
        {photos.desc}
      </div>
    ) : null;

  return (
    <div className="wflex flex-col items-center w-full max-w-screen-lg overflow-x-hidden py-20">
      <h1 className={`xl:text-7xl lg:text-7xl md:text-4xl text-3xl font-bold p-5 flex justify-center text-${styles.redPrimary} shadow-md drop-shadow-md`}>
        Gallery
      </h1>
      <Gallery photos={photos} onClick={openLightbox} />
      <div className="flex flex-col justify-center items-center">
        {/* <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox} className="flex justify-center max-w-screen-lg items-center">
              <Carousel
                components={{
                  Header: CustomHeader,
                  Footer: CustomFooter,
                }}
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                  desc: x.desc,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway> */}
      </div>
    </div>
  );
};

export default index;
