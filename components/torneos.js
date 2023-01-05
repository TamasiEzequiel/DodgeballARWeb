const p = document.getElementById("divTorneo");
p.innerHTML = `

<h2>Torneos</h2>
    <section class="torneos">
        <p>
            Torneo nacional de Dodgeball
            <br>
            Categoria: Cloth
            <br>
            <br>
            Equipos: 6
            <br>
            <br>
            Duracion partido: 2 games, 15'
            <br>
            <br>
            Haz click o scanea el codigo QR para acceder a la plataforma
        </p>
       

        <div id="imgvivo">
            <a href="https://www.twitch.tv/dodgeball_argentina">
                <img src="./IMGS/qrcode_www.twitch.tv.png" alt="ver transmision en vivo">
            </a>
        </div>


    </section>

    <h3>Revivi la ultima fecha</h3>

    <section id="torreg">
        
        <article>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xyiRr9JD4B8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </article>

        <article>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Wbzv1c8ea6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </article>

    <article>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/oDy3yReFvxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </article>

    <article>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/2JC34jnvTp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </article>

    <article>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RLniipBqkb0"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </article>

    </section>

    
`