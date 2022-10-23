import React,{useState,useEffect} from 'react'
import NewsItem from './NewsItem'

import InfiniteScroll from "react-infinite-scroll-component";
export default function News(props) {
    var [articles,setarticles] = useState([])
    var [page,setpage] = useState(1)
    var [totalResults,settotalResults] = useState(0)
    // var [pageSize,setpageSize] = useState(8)
     var pageSize=8;
    async function getData() {
        setpage(1)
        var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.category}&language=hi&sortBy=publishedAt&pageSize=${pageSize}&page=${page}&apiKey=14fad134aa644d62988cbf1db556d01b`)
        var result = await rawdata.json()
        setarticles(result.articles)
        settotalResults(result.totalResults)
    }
    useEffect(()=>{
        getData()
    },[props])
    var fetchMoreData = async () => {
        setpage(page+1)
        var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.category}&language=hi&sortBy=publishedAt&pageSize=${pageSize}&page=${page}&apiKey=14fad134aa644d62988cbf1db556d01b`)
        var result = await rawdata.json()
        setarticles(articles.concat(result.articles))
    }
    return (
        <>
            <h5 className='background text-light text-center p-2'>Latest News</h5>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={
                    <h1 className='text-center text-primary pt-5 pb-5'>Loading....</h1>
                }
            >
                <div className='row'>

                    {
                        articles.map((item, index) => {
                            return <NewsItem
                                key={index}
                                title={item.title}
                                desc={item.description}
                                img={item.urlToImage}
                                url={item.url}
                                date={item.publishedAt}
                                soruce={item.source}
                                author={item.author}
                            />
                        })
                    }
                </div>
            </InfiniteScroll>
        </>
    )
}
