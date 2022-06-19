import React, {useEffect} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './LatestNews.scss';

import { setLatestNews } from '../redux/actions/newsActions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsList from '../components/NewsList';




const LatestNews = () => {
 // const latestNews = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchNews = async () =>{
    const response = await axios.get("https://mocki.io/v1/7a4e9b8c-9553-47dd-bdf8-6576aa597e2b")
    .catch((error)=>{
      console.log('Error', error)
    });
    dispatch(setLatestNews(response.data))
  }
  useEffect(()=>{
    fetchNews();
  });
 // console.log('latestNews 123', latestNews)



  return (
    <div className="newsList">     
     <Header/>
     <div className="sm:container mx-auto px-4">
       <div className='flex justify-center text-3xl pt-4 text-center font-light  '>Watch Latest Movies</div>
     <NewsList/>  
     </div>
     <Footer/>   
    </div>
  );
}

export default LatestNews;
