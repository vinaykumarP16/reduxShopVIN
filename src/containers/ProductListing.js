import React, {useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productAction';
import ProductComponent  from './ProductComponent';
import axios from 'axios';
import '../App.css';


export default function ProductListing() { 
	const products=useSelector((state)=>state);
	const dispatch=useDispatch();


	useEffect(() => {
		fetchProduct();
	}, [])

	const fetchProduct=async()=>{
		const response=await axios.get('https://fakestoreapi.com/products').catch((err)=>{
			console.log("unable to connect");
		})

		dispatch(setProducts(response.data));
	}

	console.log(products);


	return (
		<div className="myitems">
			<ProductComponent/>		
		</div>
	)
}