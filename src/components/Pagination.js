import React, { Component } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './Pagination.css'

class Pagination extends Component {
    constructor(props){
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 8,
            currentPage:0,
            pageCount:0
        }
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
        recievedData() {
            axios
                .get("https://jsonplaceholder.typicode.com/photos")
                .then(res => {
                    const data=res.data;
                    console.log(data)
                    const slice =data.slice(this.state.offset, this.state.offset + this.state.perPage)
                    const postData = slice.map(pd=><React.Fragment>
                      
                        <div className="photo">
                            <a href={pd.url}><img className="pic" src={pd.thumbnailUrl} alt="" key={pd.id}/></a>
                            <p className="title">{pd.title}</p>
                        </div>
                  
                    </React.Fragment>)



                    this.setState({
                        pageCount: Math.ceil(data.length / this.state.perPage),
                        
                        postData
                        
                    })
                });
                
        }
        handlePageClick = (e) => {
            const selectedPage = e.selected;
            const offset = selectedPage * this.state.perPage;

            this.setState({
                currentPage: selectedPage,
                offset: offset 
            }, () => {
                this.recievedData()
            });
        };

        componentDidMount(){
            this.recievedData();
        }
    
    render() { 
        return ( 
            <React.Fragment>
                <div className="gallery">
                    {this.state.postData}
                </div>
                
                <ReactPaginate
                    previousLabe={'prev'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </React.Fragment>
         );
    }
}
 
export default Pagination;