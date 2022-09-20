import { useState, useEffect } from "react";
import { Spinner , Button ,Input} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PaginationForMovie from "./components/PaginationForMovie";
import './App.css';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { FaArrowAltCircleDown } from 'react-icons/fa';


function App (){
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [page,setPage] = useState(1)
  const [dataLoaded,setDataLoaded] = useState(false)
  const [total_pages,setTotal] = useState(0)
  const [sortByPopularity, setSortByPopularity] = useState("desc")
  const headerImg = 'https://image.tmdb.org/t/p/w185/'
 

   useEffect (()=>{
     setTimeout(() => {
      fetch(`https://api.themoviedb.org/3/person/popular?api_key=df8b08ecb436696fee41a00f8d87a540&language=en&page=${page}`)
      .then(res => res.json())
      .then(finalData => {
        setDataLoaded(true)
        setData(finalData.results)
        setTotal(finalData.total_pages)
          })
      .catch(err => console.log(err.message))
    },1000)
   },[page])

       
   const handleChange = (e) => {
     setSearch(e.target.value)
   }
  //  check here
   const updatePage = (pageNumber) =>{
    setDataLoaded(false)
    setPage(pageNumber)
   }

   const filteredAfterSearch = (searchedIt) => {
      let filtered = data.filter(item => item.name.toLowerCase().includes(searchedIt.toLowerCase()))
      return filtered
   }
  return(
    <div className="container">
      <div className="row mt-5">
          <div className="mb-5">

            <h3> Name of your favorite actor</h3>
            
            <Input onChange={handleChange}/>
          </div>
          {/* //  check here */}
          <div className="d-flex justify-content-between">
         <PaginationForMovie 
         updatePage={updatePage}
          page={page}
          total_pages={total_pages}
         />
          
         <div>
         <FaArrowAltCircleUp/>
         <FaArrowAltCircleDown/>
         </div>
         </div>
      {

      !dataLoaded ? <Spinner>
          Loading...
          </Spinner> : filteredAfterSearch(search).map((star)=> {
 
         const knownFor = star.known_for.map((el) => el.original_title || el.original_name )
      
          return (
            <Card key={star.id} sx={{ maxWidth: 345 }} className="col-sm-3">
      <CardMedia
        component="img"
        alt={star.name}
        // height="200"
        image={`${headerImg}${star.profile_path}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         
        {star.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h5>Known for :  {knownFor.join(" , ")} </h5>
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Show more</Button> */}
      </CardActions>
    </Card>
         
          )
        })
      }

    </div>
    </div>
  )
}

export default App;
