import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// import Book from './Book.js';
// import Tile from './Tile.js';
import TileList from './TileList.js';

const data = [
    {
        bookTitle: "Oh, The Places You'll Go!",
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/518eq5NjZkL._SX359_BO1,204,203,200_.jpg',
        bookDetails: {
            author: 'Dr. Seuss',
            published: '22 Jan 1990',
            age: '2-8 years',
            isbn: '0679805273'
        }
    }, {
        bookTitle: "Oh, The Places You'll Go!",
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/518eq5NjZkL._SX359_BO1,204,203,200_.jpg',
        bookDetails: {
            author: 'Dr. Seuss',
            published: '22 Jan 1990',
            age: '2-8 years',
            isbn: '0679805273'
        }
    }
];

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>*/}
                {/*<Book bookTitle="Oh, The Places You'll Go!" coverImage='https://images-na.ssl-images-amazon.com/images/I/518eq5NjZkL._SX359_BO1,204,203,200_.jpg' author='Dr. Seuss' published='22 Jan 1990' age='2-8 years' isbn='0679805273' />*/}

                {/*<Tile {...data} />*/}
                <TileList list={data} />
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

