import Movies from "./Movies";
import "../css/Movies.css";

function Collection() {
  return (
    <div>
      <div className="row">
        <div className="header-container">
          <h1>Justin<span className="quote">'</span>s Favorite Movies</h1>
        </div>
        <Movies
          image= "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" 
          title="Interstellar"
          description="A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
          year="2014"
          genre="Sci-Fi Adventure Drama"
        />
        <Movies 
          image= "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg"
          title="Pulp Fiction"
          description="The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
          year="1994"
          genre="Crime Drama"
        />
        <Movies
          image= "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg" 
          title="Django Unchained"
          description="With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi."
          year="2012"
          genre="Western Drama"
        />
      </div>
    </div>
  )
}

export default Collection;