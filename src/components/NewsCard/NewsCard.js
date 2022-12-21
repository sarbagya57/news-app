import React from 'react'
import './NewsCard.css'

const NewsCard = ({newsItem}) => {
    console.log(newsItem);

    const fullDate = new Date(newsItem.publishedAt);
        var date = fullDate.toString().split(" ");
        const hour = parseInt(date[4].substring(0,2));
        const time = hour > 12
                        ? true 
                        : false; 

  return  (
    <div className='newsCard'>
        <img 
            src={
                newsItem.urlToImage
                ? newsItem.urlToImage
                : "http://www.fremontgurdwara.org/wp-content/uploads/2020/06/no-image-icon-2.png"
                } 
            alt={newsItem.title} 
            className='newsImage'
        />
        <div className="newsText">
            <div className='hey'>
                <span className="title">
                    {newsItem.title}
                </span>
                <span className="author">
                    <a href={newsItem.url} target="_blank">
                        <b>short</b>
                    </a>
                    {" "}
                    <span className='muted'>
                        by {newsItem.author 
                            ? newsItem.author
                            : "unknown"} 
                        {" "}
                        /
                        {" "}
                        {
                            time
                            ? `${hour-12}:${date[4].substring(3,5)}
                            pm `
                            : `${hour}:${date[4].substring(3,5)} am`
                        } on {date[2]} {date[1]} {date[3]}
                    </span>
                </span>
            </div>
            <div className="lowerNewsText">
                <div className="description">
                    {newsItem.description}
                </div>
                <span className="readmore">
                    read more at {" "}
                    <a href={newsItem.url} target="_blank" 
                    className='source'>
                        <b>
                            {newsItem.source.name}
                        </b>
                    </a>
                </span>
            </div>
        </div> 
    </div>
  );
};

export default NewsCard