import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setData, setDetails } from '../../reducers/dataSlice';
import { DataGrid } from '@mui/x-data-grid';
import { config } from '../../config/config.js';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Details from '../details/Details';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';

function List() {

		//Define columns
		const columns = [
			{ field: 'id', headerName: 'ID', width: 150 },
			{ field: 'title', headerName: 'Title', width: 350 },
			{ field: 'author', headerName: 'Author', width: 250 },
			{ field: 'publisher', headerName: 'Publisher', width: 250}
		];
		
		//Add modal's custom style 
		const style = {
			margin: '100px auto',
			width: 400,
			bgcolor: 'background.paper',
			border: '1px solid #ccc',
			borderRadius: '5px',
			p: 2,
			px: 4,
			pb: 3,
			position: 'relative',
		};

		//Data for DataGrid
		const data = useSelector((state) => state.data.list);
		const details = useSelector((state) => state.data.details);
		const dispatch = useDispatch();

		//Data for Modal
		const [open, setOpen] = React.useState(false);
		const handleOpen = () => setOpen(true);
		const handleClose = () => setOpen(false);
		
		//Data for Loader
		const [loader, setLoader] = React.useState(true);

		//Function: convert data from API into dataGrid data
		const prepareData = (response) => {
			let results = [];
			response.results.forEach((result,index) => {
				let tempObject = {};
				tempObject.id = index;
				tempObject.title = result.book_details[0].title;
				tempObject.author = result.book_details[0].author;
				tempObject.publisher = result.book_details[0].publisher;
				tempObject.details = result.book_details[0];
				tempObject.details.amazon_product_url = result.amazon_product_url;
				results.push(tempObject);
			});
			return results;
		}

		//Function: handle click when user select a row
		const handleClick = (event) => {
			event.defaultMuiPrevented = true;
			dispatch(setDetails(event.row.details));
			handleOpen();
		}

		useEffect(() => {
			//Call https://developer.nytimes.com/ API
			fetch(`https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=${config.apiKey}`, {
				method: 'get',
			})
			.then(response => { return response.json(); })
			.then(json => {
				//Get data API response and convert it into dataGrid data
				dispatch(setData(prepareData(json)));
				setLoader(false);
			 })
			.catch(error => {
				console.log('NYT API Error: Defaulting to nytimes archival data.', error);
			});
		}, []);

		return (
			<div style={{ height: '400px', maxWidth: '70%',margin: '40px auto',position: 'relative', zIndex: '0' }}>
				<h1>SPA with React to browse an API endpoint</h1>
				<h2>RAZAFINDRABE Burel Kiady Bezaka</h2>
				{loader ? (<div style={{ width: '45px',margin: '40px auto',position:'absolute', zIndex: '1',left: '48%',top: '60%' }}><CircularProgress/></div>) : ''}
				<DataGrid
					rows={data}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[5]}
					checkboxSelection={false}
					disableSelectionOnClick={true}
					onRowClick={(event) => handleClick(event)}
				/>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="parent-modal-title"
					aria-describedby="parent-modal-description"
				>
					<Box sx={{ ...style, width: 600 }}>
						<CloseIcon onClick={handleClose} style={{cursor:'pointer',position:'absolute', top:'0', right:'0', margin:'10px', fontSize:'35px'}}/>
						<Details data={details}/>
					</Box>
				</Modal>
			</div>
		);
}

export default List;