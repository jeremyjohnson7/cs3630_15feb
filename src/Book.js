import React from 'react';

export default ({bookTitle, coverImage, bookDetails: {author, published, age, isbn}}) => (
    <div>
        <h1>{bookTitle}</h1>
        <img src="${coverImage}" />
        <dl>
            <dt>Author</dt>
            <dd>{author}</dd>
            
            <dt>Published</dt>
            <dd>{published}</dd>
            
            <dt>Age</dt>
            <dd>{age}</dd>
            
            <dt>ISBN</dt>
            <dd>{isbn}</dd>
        </dl>
    </div>
);

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
