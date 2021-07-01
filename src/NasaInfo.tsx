import React from 'react';
import './App.css';
import nasaLogo from './res/NASA_logo.png'


function NasaInfo() {
    return (<div className="Nasa">
            <img src={nasaLogo} className="Nasa-logo" alt="logo" />
            <h1> NASA </h1>
            <p> 
                The National Aeronautics and Space Administration is an independent agency of the U.S.
                federal government responsible for the civilian space program, as well as aeronautics
                and space research
            </p>
            <p> 
                Beginning in 1946, the National Advisory Committee for Aeronautics (NACA) began
                experimenting with rocket planes such as the supersonic Bell X-1.[14] In the early
                1950s, there was challenge to launch an artificial satellite for the International
                Geophysical Year (1957–1958). An effort for this was the American Project Vanguard.
                After the Soviet space program's launch of the world's first artificial satellite
                (Sputnik 1) on October 4, 1957, the attention of the United States turned toward
                its own fledgling space efforts. The U.S. Congress, alarmed by the perceived threat
                to national security and technological leadership (known as the "Sputnik crisis"),
                urged immediate and swift action; President Dwight D. Eisenhower counseled more
                deliberate measures. The result was a consensus that the White House forged among
                key interest groups, including scientists committed to basic research; the Pentagon
                which had to match the Soviet military achievement; corporate America looking for
                new business; and a strong new trend in public opinion looking up to space exploration.
            </p>
            <a href="https://en.wikipedia.org/wiki/NASA">
                Source: wikipedia
            </a>
            
    </div>);
}

export default NasaInfo;