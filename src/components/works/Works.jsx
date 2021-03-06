import React from 'react'
import"./works.scss"
import {useState} from "react";

export default function Works() {
    const[currentSlide,setCurrentSlide] = useState(0)
    const data=[
        {
        id: "1",
      icon: "./assets/cartoon.png",
      title: "Web Design",
      desc:
        "This ecommerce website is a my final year Project,full functional and secured ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/bg-1.png",
      title: "Desktop Application",
      desc:
        "It is a full functional hotel management project based on core java and spring .",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/cartoon.png",
      title: "Branding",
      desc:
        "This is a Portfolio website designed with reactjs and sass",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
    ];

    const handleClick=(way)=>{
        way==="left" ? setCurrentSlide(currentSlide> 0 ? currentSlide-1 :0) :
        setCurrentSlide(currentSlide<data.length -1 ?currentSlide +1 : 2);
    };
    return <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)`}}>
                {data.map(d=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                        <img src={d.icon}/>
                                </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img}/>
                        </div>
                        
                    </div>
                </div>))}
            </div>
        
            <img src="assets/arrow3.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow3.png" className="arrow right" alt="" onClick={()=>handleClick()}/>

        </div>;    
    
}
