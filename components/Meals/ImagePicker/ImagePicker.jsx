"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef();
  function handleImageBtnOnClick() {
    imageInputRef.current.click();
  }
  const [viewSelectedImage, setviewSelectedImage] = useState(null);
  function handleSelectedImageChange(e) {
    const file = e.target.files[0];
    if (!file) {
      setviewSelectedImage(null);
      return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setviewSelectedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {viewSelectedImage ? (
            <Image src={viewSelectedImage} alt="user selected image" fill />
          ) : (
            <p>No image picked yet!</p>
          )}
        </div>
        <input
          className={classes.input}
          required
          type="file"
          id={name}
          accept="image/png , image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleSelectedImageChange}
        />
        <button
          type="button"
          className={classes.button}
          onClick={handleImageBtnOnClick}
        >
          {" "}
          Pick an Image{" "}
        </button>
      </div>
    </div>
  );
}
