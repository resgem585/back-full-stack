import Movie from "../models/Movie.js"
import User from "../models/User.js"


const Query = {


    async getMovies() {
        const Movies = await Movie.find();
        return Movies
    },
    async getUser() {
        const users = await User.find()
        return users
    },    

    async login(_,{email,password} ) {
        const verifyUser = await User.findOne( { email, password } ); //
        console.log(verifyUser)
         return verifyUser
    },
    async getMovieByTitle( _, { title } ) {
        const searchMovieByTitle = await Movie.find( { title : title } ); 
        console.log( 'getting Movie', searchMovieByTitle );

       return searchMovieByTitle
    }
}

export default Query