'use client'
import React, { useState, useRef } from "react";
export default function products() {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("default");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    if (category !== "default" && !selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleBadgeClick = (category) => {
    setSelectedCategories(selectedCategories.filter((c) => c !== category));
  };
  

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleSizeChange = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  return (
    <>
      <h1 className="font-bold text-[2rem] md:text-[3rem] text-[--bg-intro-text] w-full">
        Add or remove products
      </h1>

      <div>
        <label htmlFor={'thumbnail'} className="block">
          {'Thumbnail'}
        </label>
        <div className="upload w-full h-[592px] border-2 relative" >
          <div className="absolute w-full h-[588px] top-0 left-0 right-0 flex items-center justify-center hero-overlay upload-overlay invisible opacity-0">
            <button className="btn btn-neutral upload-picture" onClick={() => fileInputRef.current.click()}>
              Upload a picture
            </button>
          </div>
          {selectedImage && (
            <img src={selectedImage} alt="Uploaded Image" key={selectedImage} className="object-contain h-[588px]" />
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          id={'thumbnail'}
          name={'thumbnail'}
          ref={fileInputRef}
          onChange={handleFileInputChange}
          className="hidden"
        />
      </div>


      <div>
        <label htmlFor={'productTitle'} className="block">
          {'Title'}
        </label>
        <input
          type={'text'}
          id={'productTitle'}
          name={'productTitle'}
          className="input input-bordered w-full"
        />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="w-[95%] box-border">
          <label htmlFor={'productPrice'} className="block w-full">
            {'Price'}
          </label>
          <input
            type={'number'}
            id={'productPrice'}
            name={'productPrice'}
            className="input input-bordered w-full"
          />
        </div>

        <div className="w-[95%] box-border ml-2">
          <label htmlFor={'productOrginalPrice'} className="block w-full">
            {'Orignal Price'}
          </label>
          <input
            type={'number'}
            id={'productOrginalPrice'}
            name={'productOrginalPrice'}
            className="input input-bordered w-full"
          />
        </div>
      </div>

      <div>
        <label htmlFor={'productQuantity'} className="block">
          {'Quantity'}
        </label>
        <input
          type={'number'}
          id={'productQuantity'}
          name={'productQuantity'}
          className="input input-bordered w-full"
        />
      </div>
      <div className="w-full">
        <label htmlFor={'productDescription'} className="block">
          {'Description'}
        </label>
        <textarea
          type={'text'}
          className="input input-bordered w-full  p-2 min-h-[10rem]"
          id={'productDescription'}
          maxLength={300}
        />
      </div>

      <div className='flex justify-between items-center'>

        <div>
          <label htmlFor="new" className="block">
            new
          </label>
          <div className="border-2 flex justify-evenly items-center p-2 rounded-lg w-[70px] h-[70px]">
            <input type="checkbox" className="toggle" id='new' name="new" />
          </div>
        </div>

        <div className="w-[95%]">
          <label htmlFor={'productSize'} className="block">
            Sizes
          </label>
          <div className="border-2 flex justify-evenly items-center p-2 rounded-lg">
            <div className="mx-2">
              <input
                type="checkbox"
                id={'sm'}
                name="productSize"
                value={'sm'}
                className="hidden"
                checked={selectedSizes.includes('sm')}
                onChange={() => handleSizeChange('sm')}
              />
              <label
                htmlFor={'sm'}
                className={`border-[4px] rounded-lg flex items-center justify-center w-[50px] h-[50px] uppercase ${selectedSizes.includes('sm') ? 'bg-[black] text-[white]' : 'bg-white text-[black]'
                  } hover:bg-slate-300 cursor-pointer`}
              >
                {'sm'}
              </label>
            </div>

            <div className="mx-2">
              <input
                type="checkbox"
                id={'md'}
                name="productSize"
                value={'md'}
                className="hidden"
                checked={selectedSizes.includes('md')}
                onChange={() => handleSizeChange('md')}
              />
              <label
                htmlFor={'md'}
                className={`border-[4px] rounded-lg flex items-center justify-center w-[50px] h-[50px] uppercase ${selectedSizes.includes('md') ? 'bg-[black] text-[white]' : 'bg-[white] text-[black]'
                  } hover:bg-slate-300 cursor-pointer`}
              >
                {'md'}
              </label>
            </div>

            <div className="mx-2">
              <input
                type="checkbox"
                id={'lg'}
                name="productSize"
                value={'lg'}
                className="hidden"
                checked={selectedSizes.includes('lg')}
                onChange={() => handleSizeChange('lg')}
              />
              <label
                htmlFor={'lg'}
                className={`border-[4px] rounded-lg flex items-center justify-center w-[50px] h-[50px] uppercase ${selectedSizes.includes('lg') ? 'bg-[black] text-[white]' : 'bg-white text-[black]'
                  } hover:bg-slate-300 cursor-pointer`}
              >
                {'lg'}
              </label>
            </div>
          </div>
        </div>



      </div>

         <div>
         <label htmlFor={'productCategories'} className="block">
        {'Categories'}
      </label>
      <select
        name="productCategories"  
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="h-[70px] border-2 px-2 w-full"
      >
        <option value="default">Please select a category</option>
        <option value="men" disabled={selectedCategories.includes("men")}>
          Men
        </option>
        <option value="women" disabled={selectedCategories.includes("women")}>
          Women
        </option>
      </select>
      <p>Selected Categories:</p>
      <div className="border-2 h-[70px] flex items-center justify-normal rounded-lg">
        {selectedCategories.map((category, index) => (
         <div
         className="badge badge-lg badge-neutral mx-1 cursor-pointer hover:bg-red-400"
         key={index}
         onClick={() => handleBadgeClick(category)}
       >
         {category}
       </div>
        ))}
      </div>
      <div>
        Product pictures
      </div>
    </div>
    </>
  )
}