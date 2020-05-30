import React, {Component} from 'react'

export default class Film extends Component{
    displayFilmDetails(){
        const results = this.props.searchResult;
        const filmId = this.props.filmid;
        if(results){
            return(
                <div>
                    <ul>
                        {results.map(item=>{
                            if(filmId==item.show.id){
                            return <li key={item.show.filmId}>
                            <h2>{item.show.name}</h2>
                            <h3>{item.show.type}</h3> 
                            <p>{item.show.summary}</p></li>
                            }
                        })
                        }
                    <h2>{results.name}</h2>
                    <p>{results.type}</p>
                    <p>{results.summary}</p>
                    </ul>
                </div>
            )
        }else{
            return(
                <div>No Selected...</div>
            )
        }
    }
    render(){
    return(
        <div>
            {this.displayFilmDetails()}
        </div>
    )
    }
}
