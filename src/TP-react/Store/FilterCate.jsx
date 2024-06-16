import React from 'react'

function FilterCate({categories,filterByCategory}) {
  return (
    <div className="row g-3 align-items-center">
    <div className="btn-group">
        {categories.map((category, index) => (
            <button className='btn btn-dark' key={index} onClick={() => filterByCategory(category)}>
                {category}
            </button>
        ))}
    </div>
</div>
  )
}

export default FilterCate