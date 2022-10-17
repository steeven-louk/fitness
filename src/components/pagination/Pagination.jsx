import React from 'react'

const Pagination = (props) => {

    const {postPerPage, totalPost } = props;
    const pageNumbers = [];

    for (let i = 1; i<=Math.ceil(totalPost/postPerPage); i++){
        pageNumbers.push(i);
    }

    // const changePage = async(item) =>{
    //     setCurrentPage(item)
    // }

  return (
   <>
    <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-end">

    {pageNumbers?.map((item)=>(
    <li className="page-item" key={item}>
        <button className="page-link" >{item}</button>
    </li>
    ))}
  </ul>
</nav>
   </>
  )
}

export default Pagination