import React from 'react'
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import{useState,useEffect} from "react";
import{
    featuredPortfolio,
    contentPortfolio,
    designPortfolio,
    mobilePortfolio,
    webPortfolio
} from "../../data"

export default function Portfolio() {
    const[selected,setSelected] = useState("featured");
    const[data,setData] = useState([]);

    const list=[
        {
            id:"featured",
            title:"Featured",
        },
        {
            id:"web",
            title:"Web App",
        },
        {
            id:"Mobile",
            title:"Desktop App",
        },
        {
            id:"design",
            title:"Design",
        },
        {
            id:"content",
            title:"Content",
        },
    ];

    useEffect(() => {

        switch(selected){
            case"featured":
            setData(featuredPortfolio);
            break;
            case"web":
            setData(webPortfolio);
            break;
            case"mobile":
            setData(mobilePortfolio);
            break;
            case"design":
            setData(designPortfolio);
            break;
            case"content":
            setData(contentPortfolio);
            break;
            default:
             setData(featuredPortfolio);
        }
          
    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
           <h1>Portfolio</h1>
       
              <ul>
                {list.map((item)=>(
                    <PortfolioList title={item.title}
                     active={selected===item.id}
                     setSelected={setSelected}
                     id={item.id}/>//kun chai select garne
                ))}
             </ul>
              
             <div className="container">
           
                {data.map((d)=>(
                 <div className="item">
                <img src={d.img}/>
                <h3>{d.title}</h3>
                </div>
                ))}
               
             </div>
        </div>
    )
}
