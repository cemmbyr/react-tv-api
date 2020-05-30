import React, {Component} from 'react'
import Film from './film'

export default class Home extends Component{
   constructor(props){
       super(props);
       this.state = {
        searchs: [],
        isLoad: false,
        selected: null,
       };
   }

   componentDidMount(){
       fetch('http://api.tvmaze.com/search/shows?q=batman')
       .then(res => res.json())
       .then(json=>{
           this.setState({
               isLoad: true,
               searchs: json,
           })
       });
   }

   displayFilms(){
    const {isLoad, searchs}= this.state;
    if(!isLoad){
        return (<div>Loading...</div>);
    }
    else{
        return searchs.map(search =>{
            return(
            <a href="#" id="about" key={search.show.id} onClick={(e)=>{this.setState({selected:search.show.id})}}><img src={search.show.image.medium} alt="nope"/></a>
            );
            
        });
        
   }
}
    render(){    
    return(     
        <div>
            {this.displayFilms()}
            <Film filmid={this.state.selected} searchResult={this.state.searchs}/>
        </div>
    )
    }
}
