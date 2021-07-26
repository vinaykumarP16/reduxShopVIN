import React,{useEffect} from 'react';
import '../App.css';
import {useParams} from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import axios from 'axios';
import {selectedProduct , removeSelectedProduct} from '../redux/actions/productAction';

export default function ProductDetails() {
	const product=useSelector((state)=>state.product);
	const { image,title,price,category,description}=product;
	const { productId } =useParams();
	const dispatch=useDispatch();
	console.log(product);

	useEffect(() => {
			if(productId && productId !== "") fetchItem();
			return()=>{
				dispatch(removeSelectedProduct());
			}
		}, [productId]);

	const fetchItem=async()=>{
		const response=await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err=>{
			console.log('unable to fetch');
		});
		dispatch(selectedProduct(response.data));
	}

	


	return (
		<div className="myproduct">
			<h1>{title}</h1>
			<div className="fulldata">
			<img src={image} width="500px" height="500px"/>
				<div className="data">
				<h3>Rs:  {price*10}</h3>
				<h4>Cat: {category}</h4>
				<p>Desc: {description}</p>
				</div>
			</div>
		</div>
	)
}