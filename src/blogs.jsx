import axios from "axios"
import { useEffect, useState } from "react"

export function Blogs() {
  const [data,setData]=useState({})
    useEffect( ()=>{
        (async ()=>{
            try {
                const response= await axios.get("https://portfolio.aashishsethii01.repl.co/Blogs")
                setData(response.data)
            } catch (error) {
                console.error("axios error",error);
            }
        })()
    },[])
    return (
      <>
        <header class='hero'>
         <h1 class='hero-heading'>Read my <span class='heading-inverted'>blogs</span></h1>
        </header>

  <ul class="list-non-bullet">
    <li>
      <article class="showcase-list container container-center">
        <h1>{data?.first?.heading}</h1>
        <small>{data?.first?.date}</small>
        <p>
          {data?.first?.description}
        </p>

        <a class="link link-primary" href={data?.first?.liveLink} target='_blank' rel='noopener'>Read More</a>
      </article>
    </li>

    <li>
      <article class="showcase-list container container-center ow">
        <h1>{data?.second?.heading}</h1>
        <small>{data?.second?.date}</small>
        <p>
        {data?.second?.description}
        </p>

        <a class="link link-primary" href={data?.second?.liveLink} target='_blank' rel='noopener'>Read More</a>
      </article>
    </li>
  </ul>


  <footer class='footer'>
    <div class='footer-header'>Connect with me</div>
    <ul class='social-links list-non-bullet'>
      <li class='list-item-inline'><a class='link' href="https://github.com/dev-ashishsethi">Github</a></li>
            <li class='list-item-inline'><a class='link' href="https://linkedin.com/in/aashishsethii01">Linkedin</a></li>
            <li class='list-item-inline'><a class='link' href="https://twitter.com/web_AshishSethi">Twitter</a></li>
    </ul>
  </footer>

      </>
    )
}

 

