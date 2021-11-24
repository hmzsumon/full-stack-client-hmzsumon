import React, { useEffect } from 'react';
import MetaData from '../layout/MetaData';
import FooterAdmin from './FooterAdmin';
import NavbarAdmin from './NavbarAdmin';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminProducts } from '../../actions/productAction';
import { Doughnut } from 'react-chartjs-2';
import { getAllUsers } from '../../actions/userAction';

const EditProduct = () => {
	const dispatch = useDispatch();
	const { adminProducts } = useSelector((state) => state.adminProducts);
	const { users } = useSelector((state) => state.allUsers);

	let outOfStock = 0;

	let length = adminProducts && adminProducts.length;

	adminProducts &&
		adminProducts.forEach((product) => {
			if (product.Stock === 0) {
				outOfStock += 1;
			}
		});

	useEffect(() => {
		dispatch(getAdminProducts());
		dispatch(getAllUsers());
	}, [dispatch]);

	const doughnutState = {
		labels: ['Out of Stock', 'InStock'],
		datasets: [
			{
				backgroundColor: ['#00A6B4', '#6800B4'],
				hoverBackgroundColor: ['#4B5000', '#35014F'],
				data: [outOfStock, length - outOfStock],
			},
		],
	};

	return (
		<>
			<MetaData title={'Admin Dashboard'} />
			<div className='w-screen h-screen bg-gray-100 md:flex'>
				<div className='bg-red-500 md:w-64'>
					<Sidebar />
				</div>
				<div className=' md:flex-1'>
					<NavbarAdmin />

					<div className='px-1 mt-10 md:flex min-h-auto'>
						<div className='w-full px-4 lg:w-6/12 xl:w-3/12'>
							<div className='relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg xl:mb-0'>
								<div className='flex-auto p-4'>
									<div className='flex flex-wrap'>
										<div className='relative flex-1 flex-grow w-full max-w-full pr-4'>
											<h5 className='text-xs font-bold uppercase text-blueGray-400'>
												Products
											</h5>
											<span className='text-xl font-semibold text-blueGray-700'></span>
										</div>
										<div className='relative flex-initial w-auto pl-4'>
											<div className='inline-flex items-center justify-center w-12 h-12 p-3 text-center text-white bg-red-500 rounded-full shadow-lg'>
												<i className='far fa-chart-bar'></i>
											</div>
										</div>
									</div>
									<p className='mt-4 text-sm text-blueGray-400'>
										{adminProducts ? adminProducts.length : 0} Products
										<span className='mr-2 text-emerald-500'>
											<i className='fas fa-arrow-up'></i> 3.48%
										</span>
										<span className='whitespace-nowrap'>Since last month</span>
									</p>
								</div>
							</div>
						</div>

						<div className='w-full px-4 lg:w-6/12 xl:w-3/12'>
							<div className='relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg xl:mb-0'>
								<div className='flex-auto p-4'>
									<div className='flex flex-wrap'>
										<div className='relative flex-1 flex-grow w-full max-w-full pr-4'>
											<h5 className='text-xs font-bold uppercase text-blueGray-400'>
												Users
											</h5>
											<span className='text-xl font-semibold text-blueGray-700'></span>
										</div>
										<div className='relative flex-initial w-auto pl-4'>
											<div className='inline-flex items-center justify-center w-12 h-12 p-3 text-center text-white bg-green-500 rounded-full shadow-lg'>
												<i className='far fa-chart-bar'></i>
											</div>
										</div>
									</div>
									<div className='mt-4 text-sm text-blueGray-400'>
										<p>{users ? users.length : 0} Users </p>
										<span className='mr-2 text-emerald-500'>
											<i className='fas fa-arrow-up'></i> 3.48%
										</span>
										<span className='whitespace-nowrap'>Since last month</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='py-16 m-auto w-96'>
						<Doughnut data={doughnutState} />
					</div>
					<FooterAdmin />
				</div>
			</div>
		</>
	);
};

export default EditProduct;
