import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import '../App.css';

export default function ProductComponent() {
	const products=useSelector((state)=>state.allProducts.products);

	const renderList=products.map((product)=>{
	const { id,title,image,price,category}=product;
		return(
				<div className="item" key={id}>
					<Link to={`/product/${id}`}>
				<div >
					<div>
						
							<img src={image} alt="product image" style={{width:'250px',height:"250px"}}/>
						
							<div >
							<div>{title}</div>
							<div>rs {price}</div>
							<div>{category}</div>
						</div>
					</div>
				</div>
				</Link>
				</div>
			);
	});

	return (
		<div>
			{renderList}
		</div>
	)
}