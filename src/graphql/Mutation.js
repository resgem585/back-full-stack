import Movie from "../models/Movie.js";
import User from "../models/User.js";

const Mutation = {
    // Movie
    async createMovie( _ , { title,description, likes, dateOfReleased,image} ) {
        const newMovie = { title, description, likes, dateOfReleased, image };
        const movie = await Movie.create( newMovie ); //returns { }
        return await Movie.find()
    },
    async updateMovie( _, { _id, title, description, likes, dateOfReleased, image } ) {
        const movie = { title, description, likes, dateOfReleased, image }
        return await Movie.findByIdAndUpdate(_id, movie,  {new: true})
    },
    async deleteMovie(_, {_id}){
        await Movie.findByIdAndDelete( _id );
        return await Movie.find();
    
    },  
    // USER
    async createUser(_, {email, password }){
        const newUser = { email, password}
        const user = await User.create( newUser )
        return await User.find() // puede ser solo user, regresar el usuario.
    },
    async updateUser(_, { _id, email, password } ){
        return await User.findByIdAndUpdate(_id, { email, password, }, {new: true})
    },
    async deleteUser( _, {_id}){
        const user = await User.findByIdAndDelete(_id);
        if(!user){
            
         throw new Error('User not found');
        }
        return user


    },
}

export default Mutation;