import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLatestPaper } from '../redux/actions/newsActions';
import rssParser from 'react-native-rss-parser';
import NewsPaperList from '../components/NewsPaperList';
 
const LatestPaper = () => { 
  const latestPaper = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchPaper = async () =>{
   const response = fetch('https://feed.livehindustan.com/rss/3127')
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
     
      //console.log(rss.title);
      //console.log(rss.items);
      //console.log(rss.items);
      //console.log(rss.items[0].title);
    })
   .catch((error) => {
       console.log(error);
   });
   //console.log(response)
   dispatch(setLatestPaper(response))
 }
 
 useEffect(()=>{
   fetchPaper();
 },[]);


  return(
    <>
   <NewsPaperList/>
    </>
  )
}


export default LatestPaper;