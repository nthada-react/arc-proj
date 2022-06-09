import React, {useEffect} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import './LatestNews.scss';
import NewsList from '../components/NewsList';
import { setLatestNews } from '../redux/actions/newsActions';

const LatestNews = () => {
  const latestNews = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchNews = async () =>{
    const response = await axios.get("https://mocki.io/v1/174c9dc4-7bf4-4d7b-88e6-59147914b2b4")
    .catch((error)=>{
      console.log('Error', error)
    });
    dispatch(setLatestNews(response.data))
  }
  useEffect(()=>{
    fetchNews();
  },[]);
  console.log('latestNews 123', latestNews)
  return (
    <div className="newsList">
     <div>Nitin</div>
     <NewsList/>
    </div>
  );
}

export default LatestNews;
