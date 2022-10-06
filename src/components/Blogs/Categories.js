import React from "react";
import { Link } from "react-router-dom";
import styles from "../../utils/GlobalStyles";

const Categories = ({ categories, filterItems, currentCategory }) => {
  // const navigate = useNavigate();
  console.log(currentCategory);
  return (
    <div className={`flex flex-wrap xl:flex-row lg:flex-row md:flex-row flex-col gap-2 p-0`}>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={`font-semibold tracking-wide drop-shadow-md text-md capitalize py-2 px-5 ${styles.blogsCategory_Text}
              ${
                currentCategory === category
                  ? `${styles.blogsCategorySelected}`
                  : `${styles.blogsCategoryActive}`
              }
              ${styles.blogsCategoryHover}`}
            key={index}
            onClick={() => filterItems(category)}
            // onClick={() => navigate(category)}
          >
            {/* {category} */}
            <Link to={currentCategory}>{category}</Link>
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
