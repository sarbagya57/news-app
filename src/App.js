import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import NavInShorts from './components/NavInShorts';
import apikey from './Data/config';
import NewsContent from './components/NewsContent/NewsContent';

function App() {

  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);

  const newsApi = async () => {
    try {

      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}&pageSize=${loadMore}`);

      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults)
    } 
    catch (error) {
      console.log(error);
    }
  };

  // console.log(newsArray);

  useEffect(() => {
    newsApi();
  
  }, [newsResults, category, loadMore])
  
  return (
    <div className="App">
   <NavInShorts setCategory={setCategory}/>
   <NewsContent 
    newsArray={newsArray} 
    newsResults={newsResults}
    setLoadMore={setLoadMore}
    loadMore={loadMore}/>
   <Footer/>
    </div>
  );
}

export default App;
