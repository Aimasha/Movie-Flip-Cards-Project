
import { Pagination,PaginationItem,PaginationLink } from "reactstrap"

function PaginationForMovie (props){
    return (
        <Pagination>
        <PaginationItem>
          <PaginationLink
            first
            href="#"
          />
        </PaginationItem >
        <PaginationItem disabled ={props.page > 1 ? false : true} >
          <PaginationLink
            href="#"
            previous
            onClick={()=>props.updatePage(props.page-1)}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={()=>props.updatePage(1)}>  
          {/* //  check here */}
       
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#"  onClick={()=>props.updatePage(2)}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={()=>props.updatePage(3)}>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={()=>props.updatePage(4)}>
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={()=>props.updatePage(5)}>
            {props.page > 5 ? props.page : 5}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem disabled ={props.page === props.total_pages ? true : false}>
          <PaginationLink
            href="#"
            next
            onClick={()=>props.updatePage(props.page+1)}
          />
        </PaginationItem>
        <PaginationItem >
          <PaginationLink
            href="#"
            last
          />
        </PaginationItem>
      </Pagination>
    )
}

export default PaginationForMovie