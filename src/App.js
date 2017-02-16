import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Book from './Book.js';
// import Tile from './Tile.js';
import TileList from './TileList.js';

// const data = [
//     {
//         bookTitle: "Oh, The Places You'll Go!",
//         coverImage: 'https://images-na.ssl-images-amazon.com/images/I/518eq5NjZkL._SX359_BO1,204,203,200_.jpg',
//         bookDetails: {
//             author: 'Dr. Seuss',
//             published: '22 Jan 1990',
//             age: '2-8 years',
//             isbn: '0679805273'
//         }
//     }, {
//         bookTitle: "Oh, The Places You'll Go!",
//         coverImage: 'https://images-na.ssl-images-amazon.com/images/I/518eq5NjZkL._SX359_BO1,204,203,200_.jpg',
//         bookDetails: {
//             author: 'Dr. Seuss',
//             published: '22 Jan 1990',
//             age: '2-8 years',
//             isbn: '0679805273'
//         }
//     }
// ];

const media = [{
    title: "Oh, The Places You'll Go!",
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/518eq5NjZkL._SX359_BO1,204,203,200_.jpg',
    details: {
        author: 'Dr. Seuss',
        published: '22 Jan 1990',
        age: '2-8 years',
        isbn: '0679805273'
    }
},{
    title: "Light & Gold",
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/91rPHJtuMeL._SX522_.jpg',
    details: {
        composer: 'Eric Whitacre',
        released: '5 April, 2011',
        aisn: 'B003ODHXEG'
    }
},{
    title: "Contact",
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51t4bFM4uML._SX200_QL80_.jpg',
    details: {
        released: '1997',
        rating: 'PG',
        genre: 'Science Fiction, Drama, Thriller, Mystery'
    }
}];

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                {/*<Book bookTitle="Oh, The Places You'll Go!" coverImage='https://images-na.ssl-images-amazon.com/images/I/518eq5NjZkL._SX359_BO1,204,203,200_.jpg' author='Dr. Seuss' published='22 Jan 1990' age='2-8 years' isbn='0679805273' />*/}

                {/*<Tile {...data} />*/}
                {/*<TileList list={data} />*/}
                <TileList list={media} />
                {/*<TileList list={this.props.media} />*/}
            </div>
        );
    }
}

export default App;

/*
{
    bookTitle: "Oh, The Places You'll Go!",
    coverImage: 'https://images-na.ssl-images-amazon.com/images/I/518eq5NjZkL._SX359_BO1,204,203,200_.jpg',
    bookDetails: {
        author: 'Dr. Seuss',
        published: '22 Jan 1990',
        age: '2-8 years',
        isbn: '0679805273'
    }
}
*/

