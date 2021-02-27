// REQUIRING MONGOOSE FROM NPM MODULE

const mongoose = require("mongoose");


// CONNECT MONGOOSE TO LOCAL SERVER

mongoose.connect("mongodb://localhost:27017/infoskillx",
 {useNewUrlParser:true ,
  useUnifiedTopology:true,
  useCreateIndex:true,
  useFindAndModify:true})
  .then( () =>{
      console.log("Database is Conneted Succesfully...... ");
  }).catch( (err) =>{
      console.log(err);
})

//CREATING DATABASE STRUCTURE

const playlistSchema = new mongoose.Schema({
    name : String,
    ctype : String,
    videos : Number,
    author : String,
    active : Boolean,
    date : {
        type : Date,
        default : Date.now
    }
})


// COLLECTION OF DATABASE

const Playlist = new mongoose.model("Playlist" , playlistSchema );


// CREATING MULTIPLE DOCUMENTS

const createDocuments = async () =>{
    try{
        const reactPlaylist = new Playlist({
            name : "React Js",
            ctype : "Front End",
            videos : 86,
            active : true,
        })
        const nodePlaylist = new Playlist({
            name : "Node Js",
            ctype : "Back End",
            videos : 56,
            active : true,
        })
        const expressPlaylist = new Playlist({
            name : "Express Js",
            ctype : "Back End",
            videos : 16,
            active : true,
        })
        const mongooosePlaylist = new Playlist({
            name : "Mongoose Js",
            ctype : "Database",
            videos : 47,
            active : true,
        })
        const javascriptPlaylist = new Playlist({
            name : "Javascript",
            ctype : "Front End",
            videos : 150,
            active : true,
        })
        const htmlPlaylist = new Playlist({
            name : "HTML",
            ctype : "Front End",
            videos : 50,
            active : true,
        })
        const cssPlaylist = new Playlist({
            name : "CSS",
            ctype : "Front End",
            videos : 150,
            active : true,
        })
        const angularPlaylist = new Playlist({
            name : "Angular Js",
            ctype : "Front End",
            videos : 30,
            active : true,
        })

        // const result = await Playlist.insertMany([reactPlaylist,nodePlaylist,expressPlaylist,mongooosePlaylist,javascriptPlaylist]);
        const result = await Playlist.insertMany([htmlPlaylist , cssPlaylist,angularPlaylist]);
        console.log("Documents inserted sucessfully!!");
    }catch(err){
        console.log(err)
    }
}
// createDocuments();

// READ DOCUMENTS FROM YOUR DATABASE

const getDocuments = async () =>{
    try{
        const data = await Playlist.find();
        // const data = await Playlist.find({name : "Mongoose Js"} , { _id : 0 , name : 1});
        // const data = await Playlist.find({videos : {$gt : 50}});
        // const data = await Playlist.find({videos : {$lt : 50}});
        // const data = await Playlist.find({ctype : {$in : "Back End"}});
        // const data = await Playlist.find({ctype : {$nin : "Back End"}}, {_id : 0 , name :1 , ctype : 1});
        // const data = await Playlist.find({$and : [ {ctype : "Back End"} , { videos : {$gte : 56}}]});
        // const data = await Playlist.find().count(); - no of documents present in database
        // const data = await Playlist.find({ctype : "Back End"}).countDocuments(); 
        // const data = await Playlist.find({ctype : "Front End"}).countDocuments(); 
        // const data = await Playlist.find({ctype : "Front End"}).limit(1); 
        if(data == null){
            console.log("opps !! Data Not found ");
        }else{
            console.log(data);
        }
    }catch(err){
        console.log(err);
    }
}
getDocuments();

// UPDATE DATA IN DATABASE 

const updataData = async (_id) =>{
    try{
        const newData = await Playlist.findByIdAndUpdate({_id}, {$set : {name : "React"}});
    console.log(newData);}
    catch(err){
        console.log(err);
    }
}
// updataData("6017ea0db0b52145ec1c8c53");

// DELETE DATA FROM DATABASE 

const deleteData = async (_id) =>{
    try{
        const delData = await Playlist.findByIdAndDelete(_id);
        console.log(delData);
    }catch(err){
        console.log(err);
    }
}

// deleteData("6017fd87457fb60718b2925e");





