import React from 'react';
import { useSelector } from 'react-redux';
import '../style/listing.scss'


const NewsPaperList = () => {

  const latestPaper = useSelector((state) => state.latestPaper.latestPaper);
  const renderPaperList = latestPaper.map((latestPaper) =>{
    console.log('dfdfd', renderPaperList)
  })


  return <>
  <>nitin</>
  <div className="container mx-auto pt-12 pb-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
    
  {renderPaperList} 
  </div>
  </div>  
  </>
};



export default NewsPaperList;
