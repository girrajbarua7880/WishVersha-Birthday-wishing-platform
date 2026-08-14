// import { useRef } from "react";

// function PhotoTool({ wish, updateWish }) {
//   const fileInputRef = useRef(null);

//   const photos = Array.isArray(wish?.photos)
//     ? wish.photos
//     : [];

//   const handleFiles = (event) => {
//     const files = Array.from(
//       event.target.files || []
//     ).filter((file) =>
//       file.type.startsWith("image/")
//     );

//     if (!files.length) {
//       event.target.value = "";
//       return;
//     }

//     let completed = 0;
//     const newPhotos = [];

//     files.forEach((file) => {
//       const reader = new FileReader();

//       reader.onload = () => {
//         newPhotos.push({
//           id:
//             `${Date.now()}-` +
//             `${Math.random()
//               .toString(36)
//               .slice(2, 9)}`,

//           name: file.name,

//           src: reader.result,
//         });

//         completed += 1;

//         // Wait until ALL files are loaded.
//         if (completed === files.length) {
//           updateWish("photos", [
//             ...photos,
//             ...newPhotos,
//           ]);
//         }
//       };

//       reader.onerror = () => {
//         completed += 1;

//         if (completed === files.length) {
//           updateWish("photos", [
//             ...photos,
//             ...newPhotos,
//           ]);
//         }
//       };

//       reader.readAsDataURL(file);
//     });

//     event.target.value = "";
//   };

//   const removePhoto = (photoId) => {
//     const updatedPhotos =
//       photos.filter(
//         (photo) =>
//           photo?.id !== photoId
//       );

//     updateWish(
//       "photos",
//       updatedPhotos
//     );
//   };

//   return (
//     <div className="space-y-6">

//       {/* HEADER */}

//       <div>
//         <p className="text-sm font-black text-gray-900">
//           Memory Photos 📸
//         </p>

//         <p className="mt-1 text-xs leading-5 text-gray-400">
//           Add photos that you want to show in
//           your birthday memory section.
//         </p>
//       </div>

//       {/* UPLOAD */}

//       <button
//         type="button"
//         onClick={() =>
//           fileInputRef.current?.click()
//         }
//         className="flex w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 px-5 py-8 text-center transition hover:border-violet-400 hover:bg-violet-50"
//       >
//         <span className="text-4xl">
//           📸
//         </span>

//         <span className="mt-3 text-sm font-black text-gray-800">
//           Add Photos
//         </span>

//         <span className="mt-1 text-xs text-gray-400">
//           Click to choose photos
//         </span>
//       </button>

//       <input
//         ref={fileInputRef}
//         type="file"
//         accept="image/*"
//         multiple
//         onChange={handleFiles}
//         className="hidden"
//       />

//       {/* COUNT */}

//       <div className="flex items-center justify-between">

//         <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
//           Your Photos
//         </span>

//         <span className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-bold text-violet-700">
//           {photos.length}
//         </span>

//       </div>

//       {/* PHOTOS */}

//       {photos.length > 0 ? (
//         <div className="grid grid-cols-2 gap-3">

//           {photos.map(
//             (photo, index) => {
//               const source =
//                 typeof photo === "string"
//                   ? photo
//                   : photo?.src ||
//                     photo?.url;

//               if (!source) {
//                 return null;
//               }

//               const photoId =
//                 typeof photo === "string"
//                   ? `${source}-${index}`
//                   : photo?.id ||
//                     `${source}-${index}`;

//               return (
//                 <div
//                   key={photoId}
//                   className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100"
//                 >

//                   <img
//                     src={source}
//                     alt={
//                       typeof photo ===
//                       "string"
//                         ? "Wish memory"
//                         : photo?.name ||
//                           "Wish memory"
//                     }
//                     className="aspect-square w-full object-cover"
//                   />

//                   <button
//                     type="button"
//                     onClick={() =>
//                       removePhoto(
//                         photo?.id
//                       )
//                     }
//                     className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-sm text-white opacity-0 backdrop-blur transition group-hover:opacity-100"
//                     aria-label="Remove photo"
//                   >
//                     ×
//                   </button>

//                 </div>
//               );
//             }
//           )}

//         </div>
//       ) : (
//         <div className="rounded-2xl bg-gray-50 px-5 py-8 text-center">

//           <div className="text-3xl">
//             🖼️
//           </div>

//           <p className="mt-2 text-sm font-bold text-gray-600">
//             No photos added
//           </p>

//           <p className="mt-1 text-xs text-gray-400">
//             Add some memories to make your
//             wish more personal.
//           </p>

//         </div>
//       )}

//     </div>
//   );
// }

// export default PhotoTool;


import { useRef, useState } from "react";

const CLOUDINARY_CLOUD_NAME =
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

const CLOUDINARY_UPLOAD_PRESET =
  import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

function PhotoTool({ wish, updateWish }) {
  const fileInputRef = useRef(null);

  const [uploading, setUploading] =
    useState(false);

  const [uploadProgress, setUploadProgress] =
    useState(0);

  const photos = Array.isArray(wish?.photos)
    ? wish.photos
    : [];

  // =====================================================
  // UPLOAD IMAGE TO CLOUDINARY
  // =====================================================

  const uploadToCloudinary = (file) => {
    return new Promise((resolve, reject) => {
      if (!CLOUDINARY_CLOUD_NAME) {
        reject(
          new Error(
            "Cloudinary Cloud Name is missing. Check your .env file."
          )
        );

        return;
      }

      if (!CLOUDINARY_UPLOAD_PRESET) {
        reject(
          new Error(
            "Cloudinary Upload Preset is missing. Check your .env file."
          )
        );

        return;
      }

      const formData = new FormData();

      formData.append(
        "file",
        file
      );

      formData.append(
        "upload_preset",
        CLOUDINARY_UPLOAD_PRESET
      );

      // Optional folder
      formData.append(
        "folder",
        "wishversa"
      );

      const xhr = new XMLHttpRequest();

      const uploadUrl =
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

      xhr.open(
        "POST",
        uploadUrl
      );

      // =================================================
      // PROGRESS
      // =================================================

      xhr.upload.onprogress = (
        event
      ) => {
        if (!event.lengthComputable) {
          return;
        }

        const progress =
          Math.round(
            (event.loaded /
              event.total) *
              100
          );

        setUploadProgress(
          progress
        );
      };

      // =================================================
      // SUCCESS / ERROR
      // =================================================

      xhr.onload = () => {
        if (
          xhr.status >= 200 &&
          xhr.status < 300
        ) {
          try {
            const data =
              JSON.parse(
                xhr.responseText
              );

            if (!data.secure_url) {
              reject(
                new Error(
                  "Cloudinary did not return an image URL."
                )
              );

              return;
            }

            resolve({
              id:
                data.public_id ||
                `${Date.now()}-${Math.random()
                  .toString(36)
                  .slice(2, 9)}`,

              name:
                file.name,

              src:
                data.secure_url,

              url:
                data.secure_url,

              publicId:
                data.public_id,

              width:
                data.width,

              height:
                data.height,

              format:
                data.format,

              bytes:
                data.bytes,
            });

          } catch (error) {
            reject(
              new Error(
                "Invalid response received from Cloudinary."
              )
            );
          }

          return;
        }

        // Cloudinary error
        try {
          const errorData =
            JSON.parse(
              xhr.responseText
            );

          reject(
            new Error(
              errorData?.error?.message ||
                "Cloudinary upload failed."
            )
          );
        } catch {
          reject(
            new Error(
              "Cloudinary upload failed."
            )
          );
        }
      };

      xhr.onerror = () => {
        reject(
          new Error(
            "Network error while uploading image to Cloudinary."
          )
        );
      };

      xhr.onabort = () => {
        reject(
          new Error(
            "Image upload was cancelled."
          )
        );
      };

      xhr.send(formData);
    });
  };

  // =====================================================
  // HANDLE FILES
  // =====================================================

  const handleFiles = async (
    event
  ) => {
    const files = Array.from(
      event.target.files || []
    ).filter(
      (file) =>
        file.type.startsWith(
          "image/"
        )
    );

    // Reset input so same image
    // can be selected again later.
    event.target.value = "";

    if (!files.length) {
      return;
    }

    // ===================================================
    // CONFIG CHECK
    // ===================================================

    if (
      !CLOUDINARY_CLOUD_NAME ||
      !CLOUDINARY_UPLOAD_PRESET
    ) {
      alert(
        "Cloudinary configuration missing. Please check frontend/.env and restart Vite."
      );

      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      const uploadedPhotos = [];

      // =================================================
      // UPLOAD ONE BY ONE
      // =================================================

      for (
        let index = 0;
        index < files.length;
        index++
      ) {
        const file =
          files[index];

        console.log(
          `Uploading photo ${index + 1}/${files.length}:`,
          file.name
        );

        setUploadProgress(0);

        const uploadedPhoto =
          await uploadToCloudinary(
            file
          );

        uploadedPhotos.push(
          uploadedPhoto
        );
      }

      // =================================================
      // ADD CLOUDINARY PHOTOS TO WISH
      // =================================================

      updateWish(
        "photos",
        [
          ...photos,
          ...uploadedPhotos,
        ]
      );

      console.log(
        "Cloudinary photos:",
        uploadedPhotos
      );

    } catch (error) {
      console.error(
        "Cloudinary upload error:",
        error
      );

      alert(
        error?.message ||
          "Photo upload failed. Please try again."
      );

    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  // =====================================================
  // REMOVE PHOTO
  // =====================================================

  const removePhoto = (
    photoId
  ) => {
    const updatedPhotos =
      photos.filter(
        (photo) => {
          if (
            typeof photo ===
            "string"
          ) {
            return (
              photo !== photoId
            );
          }

          return (
            photo?.id !==
              photoId &&
            photo?.publicId !==
              photoId
          );
        }
      );

    updateWish(
      "photos",
      updatedPhotos
    );
  };

  // =====================================================
  // GET IMAGE URL
  // =====================================================

  const getPhotoSource = (
    photo
  ) => {
    if (
      typeof photo ===
      "string"
    ) {
      return photo;
    }

    return (
      photo?.src ||
      photo?.url ||
      ""
    );
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="space-y-6">

      {/* HEADER */}

      <div>
        <p className="text-sm font-black text-gray-900">
          Memory Photos 📸
        </p>

        <p className="mt-1 text-xs leading-5 text-gray-400">
          Add photos that you want to
          show in your birthday wish.
        </p>
      </div>

      {/* UPLOAD BUTTON */}

      <button
        type="button"
        disabled={uploading}
        onClick={() =>
          fileInputRef.current?.click()
        }
        className="flex w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 px-5 py-8 text-center transition hover:border-violet-400 hover:bg-violet-50 disabled:cursor-not-allowed disabled:opacity-60"
      >

        <span className="text-4xl">
          {uploading
            ? "⏳"
            : "📸"}
        </span>

        <span className="mt-3 text-sm font-black text-gray-800">
          {uploading
            ? "Uploading..."
            : "Add Photos"}
        </span>

        <span className="mt-1 text-xs text-gray-400">
          {uploading
            ? `${uploadProgress}% uploaded`
            : "JPG, PNG, WEBP"}
        </span>

      </button>

      {/* FILE INPUT */}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple
        onChange={
          handleFiles
        }
        disabled={uploading}
        className="hidden"
      />

      {/* UPLOAD PROGRESS */}

      {uploading && (
        <div className="space-y-2">

          <div className="h-2 overflow-hidden rounded-full bg-gray-100">

            <div
              className="h-full rounded-full bg-violet-600 transition-all duration-300"
              style={{
                width: `${uploadProgress}%`,
              }}
            />

          </div>

          <p className="text-center text-xs font-bold text-violet-600">
            Uploading to Cloudinary...
          </p>

        </div>
      )}

      {/* COUNT */}

      <div className="flex items-center justify-between">

        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
          Your Photos
        </span>

        <span className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-bold text-violet-700">
          {photos.length}
        </span>

      </div>

      {/* PHOTOS */}

      {photos.length > 0 ? (

        <div className="grid grid-cols-2 gap-3">

          {photos.map(
            (
              photo,
              index
            ) => {
              const source =
                getPhotoSource(
                  photo
                );

              if (!source) {
                return null;
              }

              const photoId =
                typeof photo ===
                "string"
                  ? `${source}-${index}`
                  : photo?.id ||
                    photo?.publicId ||
                    `${source}-${index}`;

              return (
                <div
                  key={photoId}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100"
                >

                  {/* IMAGE */}

                  <img
                    src={source}
                    alt={
                      typeof photo ===
                      "string"
                        ? "Wish memory"
                        : photo?.name ||
                          "Wish memory"
                    }
                    className="aspect-square w-full object-cover"
                  />

                  {/* CLOUDINARY BADGE */}

                  {photo?.publicId && (
                    <span className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2 py-1 text-[9px] font-bold text-white backdrop-blur">
                      Cloudinary
                    </span>
                  )}

                  {/* DELETE */}

                  <button
                    type="button"
                    onClick={() =>
                      removePhoto(
                        photo?.id ||
                          photo?.publicId ||
                          photoId
                      )
                    }
                    className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-sm text-white opacity-0 backdrop-blur transition group-hover:opacity-100"
                    aria-label="Remove photo"
                  >
                    ×
                  </button>

                </div>
              );
            }
          )}

        </div>

      ) : (

        <div className="rounded-2xl bg-gray-50 px-5 py-8 text-center">

          <div className="text-3xl">
            🖼️
          </div>

          <p className="mt-2 text-sm font-bold text-gray-600">
            No photos added
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Add some memories to make
            your wish more personal.
          </p>

        </div>
      )}

    </div>
  );
}

export default PhotoTool;