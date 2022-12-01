import React, {useState,useContext } from 'react'
import { Redirect } from 'react-router-dom';
import CurrentUserContext from "../CurrentUserContext";
import ReactPaginate from 'react-paginate';
import "./Murals.css";



import AdminMuralCard from './AdminMuralCard';


const AdminMurals = ({suggestedMurals, setSuggestedMurals, deny, approve }) => {

    const {currentUser} = useContext(CurrentUserContext)
    
    if(!currentUser || !currentUser.user.isAdmin){
        return <Redirect to="/"/>
    }



        const[pageNumber, setPageNumber] = useState(0)
        const muralsPerPage = 3;
        const pagesVisited = pageNumber * muralsPerPage
        
        const displayMurals = suggestedMurals.slice(pagesVisited, pagesVisited + muralsPerPage)
        const pageCount = Math.ceil(suggestedMurals.length/muralsPerPage)
        const changePage = ({selected}) =>{
            setPageNumber(selected)

        }


    return (

        <>
        <div className='flex-parent' >
            
                                 
                        {displayMurals.map(mural => (
                            
                               <div key={mural.id}className='flex-child'> 
                                <AdminMuralCard values={{
                                    id:mural.id,
                                    muralAddress:mural.street_address,
                                    artist:mural.artist,
                                    img:mural.img,
                                    setSuggestedMurals:setSuggestedMurals,
                                    deny:deny,
                                    suggestedMurals,
                                    approve:approve
                                 }}/>
                                </div>

                            ))}

            </div>

            <div>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledLinkClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />

            </div>



            </>

        )
            
} 

export default AdminMurals;