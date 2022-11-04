import React, { useState } from 'react'
function News() {
    const [data, setData] = useState()
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=23b10080245d4bf8bc1383ba7272ea9f")
        .then((res) => res.json())
        .then((res) => {
            setData(res.articles)
            console.log("res",res)
        })
        .catch((err) => {
            console.log("Error==>", err);
        });
    return (
        <div>
            <div>
                {
                    data?.length ?
                        data?.map((v, i) => {
                            return (
                                <div key={i}>
                                    <div className="accordion">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                    aria-expanded="true" aria-controls="collapseOne">
                                                    Breaking News
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="collapse hide" aria-labelledby="headingOne"
                                                data-bs-parent="#accordionExample">
                                                <div className="main_div">
                                                    <div>
                                                        <img className="image" src={v?.urlToImage} />
                                                    </div>
                                                    <div>
                                                        <h2>Author : {v?.author}</h2>
                                                        <span><b>Description : </b>{v.description}</span><br />
                                                        <span><b>Title : </b>{v?.title}</span>
                                                        <a style={{ textDecoration: 'none' }} href={v?.url} target="_blank">See More...</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <div className='noData'>
                            <img className='img' src="https://cdn.dribbble.com/users/572419/screenshots/6412866/empty.gif" alt="" />
                            {/* <h1>No Data Found</h1> */}
                        </div>
                }
            </div>
            <div id="search_div">
            </div>
        </div>
    )
}

export default News
