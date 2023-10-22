import React from 'react';
import { Box, Button, /*Card,*/ TextField } from '@mui/material';
import { Formik } from 'formik';
import Header from '../../components/Header';
// import addProject from './api'

const ProjectForm = ({ formik, handleAddProject }) => {

	return (
		<Box m='20px'>
			<Header title='PROJECT FORM' subtitle='Create a New Project' />

			<Formik>
					<form onSubmit={formik.handleSubmit}>
						<Box
							display='grid'
							gap='30px'
							gridTemplateColumns='repeat(6, minmax(0, 1fr))'
						>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label={'Project Name'}
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.projectName}
								name='projectName'
								error={
									!!formik.touched.projectName &&
									!!formik.errors.projectName
								}
								helperText={
									formik.touched.projectName &&
									formik.errors.projectName
										? formik.errors.projectName
										: formik.projectName
								}
								sx={{ gridColumn: 'span 3' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='ID'
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.id}
								name='id'
								error={!!formik.touched.id && !!formik.errors.id}
								helperText={
									formik.touched.id && formik.errors.id
										? formik.errors.id
										: formik.id
								}
								sx={{ gridColumn: 'span 3' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='Project Value'
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.projectValue}
								name='projectValue'
								error={
									!!formik.touched.projectValue &&
									!!formik.errors.projectValue
								}
								helperText={
									formik.touched.projectValue &&
									formik.errors.projectValue
										? formik.errors.projectValue
										: formik.projectValue
								}
								sx={{ gridColumn: 'span 3' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='Project Priority'
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.contact}
								name='projectPriority'
								error={
									!!formik.touched.projectPriority &&
									!!formik.errors.projectPriority
								}
								helperText={
									formik.touched.projectPriority &&
									formik.errors.projectPriority
										? formik.errors.projectPriority
										: formik.projectPriority
								}
								sx={{ gridColumn: 'span 3' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='Contact Name'
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.contactName}
								name='contactName'
								error={
									!!formik.touched.contactName &&
									!!formik.errors.contactName
								}
								helperText={
									formik.touched.contactName &&
									formik.errors.contactName
										? formik.errors.contactName
										: formik.contactName
								}
								sx={{ gridColumn: 'span 3' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='Contact Email'
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.email}
								name='email'
								error={
									!!formik.touched.email && !!formik.errors.email
								}
								helperText={
									formik.touched.email && formik.errors.email
										? formik.errors.email
										: formik.email
								}
								sx={{ gridColumn: 'span 3' }}
							/>
							<TextField
								fullWidth
								variant='filled'
								type='text'
								label='Phone Number'
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.phoneNumber}
								name='phoneNumber'
								error={
									!!formik.touched.phoneNumber &&
									!!formik.errors.phoneNumber
								}
								helperText={
									formik.touched.phoneNumber &&
									formik.errors.phoneNumber
										? formik.errors.phoneNumber
										: formik.phoneNumber
								}
								sx={{ gridColumn: 'span 3' }}
							/>
						</Box>
						<Box display='flex' justifyContent='end' mt='20px'>
							<Button
								type='submit'
								color='secondary'
								variant='contained'
							>
								Create Project
							</Button>
						</Box>
					</form>
			</Formik>
		</Box>
	);
};

// const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export default ProjectForm;
