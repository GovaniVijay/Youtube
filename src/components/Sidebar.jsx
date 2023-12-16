import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
    className="Category_container"
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          border: "none",
          //       min-height: var(--paper-item-min-height,48px);
          // cursor: pointer;
          // box-sizing: border-box;
          // outline: 0;
          // color: var(--yt-spec-text-primary);
          // display: flexbox;
          // display: flex;
          // flex-direction: row;
          // align-items: center;
          minHeight: "40px",
          cursor: "pointer",
          boxSizing: "border-box",
          color: "#f1f1f1",
          display: "flex",
          outline: 0,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor:
            category.name === selectedCategory ? "#414040" : "transparent",
          borderRadius: "10px",
          marginRight: "10px",
        }}
        key={category.name}
      >
        <span
          style={{
            color: "white",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;
