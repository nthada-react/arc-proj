import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../style/newslisting.scss'
 
const TopNewsComponent = () => { 
 const topnews = useSelector ((state) => state.allTopnews.topnews);
 const renderTopNews = topnews.map((topnews) =>{
   const {id, title, description, published} = topnews;
   const description1 = description.replace(/<img[^>]*>/g,"");
   const url = id.replace(/(http(s?)):\/\//g,"");
   var regex = /img.*?src=("|')(.*?)\1/i;
   var image = description.match(regex)[2];
   
   
   //const img = description.replace("<![CDATA[", "").replace("]]>", "");   

   //var regex = /<img.*?src='(.*?)'>/;
   //const src = regex.exec(description);
   
   //console.log(src);
  // console.log(title)
 
  //console.log(image);
  //var img = description.match(/<img[^>]+src="http([^">]+)[&\/\\#,+()$~%.'":*?<>{}]/g, "");
  //var img = img.toString().replace(/"/g, "");
  //var img = description.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
  //var img = img.replace('<img src="', '');
  //var img = img.replace('"/>', '');
  //console.log('fgfg', image)
   return(
    <div key={id} className="grid grid-flow-col hover:shadow-lg m-5 border border-slate-300 p-3 rounded-md">
      <Link to={`//${url}`} target="_blank" title={url}>
    <div className='topNewsListing flex'>    
      <div className='imgCaption'>     
        <img src={image} alt={image} width="200px" className=' rounded-md' />       
        </div>
      <div>
      <h1>{title}</h1>
      <p>{description1}</p>
      <small>{published}</small>
      </div>
     
    </div>   
    </Link>  
  </div>
    // <div key={id}>
    // <div>{title}</div> <div>{description}</div> 
    //  </div>
   )
 })
  return(
  <>
  {renderTopNews}
  </>
  )
}


export default TopNewsComponent;