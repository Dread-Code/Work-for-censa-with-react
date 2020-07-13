import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    let programs = ['One Punch'];

    const [categories, setCategories] = useState(programs);

    return (
      <div>
        <h2> Gif Expert App</h2>
        <AddCategory setCategories = { setCategories }/>
        <hr/>
        <ol>
            {
                categories.map(category =>(
                    <GifGrid 
                    category = {category}
                    key = {category}
                    />
                ))
            }
        </ol>
      </div>
    )
  }