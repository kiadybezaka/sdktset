import React from 'react'
import './Details.css';

function Details({data}) {
		return (
			<div style={{ height: 'auto', maxWidth: '100%',margin: '40px auto' }}>
					<h3>Book's details</h3>
					<ul>
						<li><strong>Title: </strong>{data.title}</li>
						<li><strong>Author: </strong>{data.author}</li>
						<li><strong>Publisher: </strong>{data.publisher}</li>
						<li><strong>Description:</strong><br/>{data.description}</li>
						<li><strong>Link: </strong><a href={data.amazon_product_url} rel="noreferrer noopener" target="_blank">Amazon link</a></li>
					</ul>
			</div>
		);
}

export default Details;