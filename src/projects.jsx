import axios from "axios"
import { useEffect, useState } from "react"

export function Project() {
    const [data,setData]=useState([])
    useEffect( ()=>{
        (async ()=>{
            try {
                const response= await axios.get("https://portfolio.aashishsethii01.repl.co/Projects")
                setData(response.data)
            } catch (error) {
                console.error("axios error",error)
            }
        })()
    },[])
    return (
    <>
      
    <header class='hero'>
        <h1 class='hero-heading'>see my <span class='heading-inverted'>Projects</span></h1>
    </header>

<main>
    <ul class='list-non-bullet list-reverse'>
       {data.length!==0? data?.map((project,index)=>{
            return(  <li>
                    <article className={`showcase-list container container-center ${index%2===0?"":"ow"}`}>
                        <h1>{project?.heading}</h1>
                        <small>{project?.date}</small>
                        <p>{project?.description}</p>

                        <a class='link link-primary' href={project?.liveLink}
                            target='_blank' rel='noopener'>Live Project</a>
                        <a class='link link-secondary' href={project?.githubLink}
                            target='_blank' rel='noopener'>View Source</a>
                    </article>
                </li>)
       }):""} 
    </ul>
</main>

<footer class='footer'>
    <div class='footer-header'>Connect with me</div>
    <ul class='social-links list-non-bullet'>
        <li class='list-item-inline'><a class='link' href="https://github.com/dev-ashishsethi" target="_blank">Github</a></li>
        <li class='list-item-inline'><a class='link' href="https://linkedin.com/in/aashishsethii01" target="_blank">Linkedin</a></li>
        <li class='list-item-inline'><a class='link' href="https://twitter.com/web_AshishSethi" target="_blank">Twitter</a></li>
    </ul>
</footer>
</>
    )    
}
