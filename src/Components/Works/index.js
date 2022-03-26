import React from "react";
import { getKey } from '../../utils/helpers';

//on hover, show popup modal with description of project
function Works () {
    const works =[
        {
            name: 'Song Starter 3000',
            description: 'An application designed to help cultivate creativity in musicians by generating random chord progressions',
            image: 'Song-Starter-3000',
            url: 'https://song-starter-3000.herokuapp.com/',
            github: 'https://github.com/dmknapp2385/Song-Starter-3000/tree/main',
        },
        {
            name: 'Bored and Brews',
            description: 'An application designed using third party REST APIs to defeat boredum with activites and brews to enjoy after. The application generates a random activity and list of nearby breweries that users can store in a weekly calendar to defeat bordem',
            image: 'Bored-and-Brews',
            url: 'https://fmatthew40.github.io/bored-and-brews/',
            github: 'https://github.com/dmknapp2385/bored-and-brews',
        },
        {
            name: 'Techy News',
            description: 'A website that allows a user to view posts about tech. Once signed up, users can save posts, create posts and comment on other user posts',
            image: 'Techy-News',
            url: 'https://warm-escarpment-95693.herokuapp.com/',
            github: 'https://github.com/dmknapp2385/Techy-News',
        },

        {
            name: 'Coding Quiz',
            description: 'A simple website used to test basic coding concepts. The quiz is timed and time is deducted for wrong answers. High scores are saved',
            image: 'Coding-Quiz',
            url: 'https://dmknapp2385.github.io/Coding-Quiz/',
            github: 'https://github.com/dmknapp2385/Coding-Quiz',
        },
        {
            name: 'WeatherSpot',
            description: 'A weather application that will show the current weather conditions of a location and a five day forecast. Most recent searches are saved and displayed for quick searching',
            image: 'WeatherSpot',
            url: 'https://dmknapp2385.github.io/WeatherSpot/',
            github: 'https://github.com/dmknapp2385/WeatherSpot',
        },
        {
            name: 'Notable',
            description: 'A note/task making application that allows users to make lists of notes, edit and complete/delete notes',
            image: 'Notable',
            url: 'https://arcane-ridge-53547.herokuapp.com/',
            github: 'https://github.com/dmknapp2385/Notable',
        },
    ]  
    
    const worksArray1 = 
                works.slice(0, 3);
            
    const worksArray2 =
                works.slice(3, 3 + works.length);
   return(

        <div className="is-9 pt-13">
            <div className="tile is-ancestor">
                    {worksArray1.map((work)=>(
                    <div className="tile is-parent mx-4" key={getKey(work.name)}>
                        <img
                            src={require(`../../images/${work.image}.jpg`)}
                            alt={work.name}
                            className="mx-1 img-thumb"
                            style={{}}
                            // onClick={() => toggleModal(image, i)}
                        />
                    </div>

                    ))}
            </div>
            <div className="tile is-ancestor mt-4">
                    {worksArray2.map((work)=>(
                    <div className="tile is-parent mx-4" key={getKey(work.name)}>
                        <img
                            src={require(`../../images/${work.image}.jpg`)}
                            alt={work.name}
                            className="mx-1 img-thumb"
                            // onClick={() => toggleModal(image, i)}
                            key={getKey(work.name)}
                        />
                    </div>

                    ))}
            </div>
            
        </div>
        
    )
}

export default Works;