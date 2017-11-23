import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
	renderField(field) {
		const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : '' }`;
		return (
			<div className={className}>
				<label>{field.label}</label>
				<input
					className="form-control"
					type="text"
					{...field.input}
				/>
				<div className="text-help">
					{field.meta.touched? field.meta.error : ''}
				</div>
			</div>
		);
	}


	onSubmit(values) {
		console.log(values);
	}


	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="Title"
					name="title"
					component={this.renderField}
				/>
				<Field
					label="Categories"
					name="categories"
					component={this.renderField}
				/>
				<Field
					label="Post Content"
					name="content"
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

function validate(values) {
	//console.log(values) -> { title: 'asd', categories: 'asdf', content: 'asdf'}
	const errors = {};

	//Validate the inputs from 'values'
	if (!values.title || values.title.length < 3) {
		errors.title="Enter a title at least 3 character long";
	}
	if (!values.categories) {
		errors.categories="Enter a category";
	}
	if (!values.content) {
		errors.content="Enter content";
	}
	//if errors is empty the form is fine to submit!
	return errors;
}

export default reduxForm({
	validate: validate,
	form: 'PostsNewForm'
})(PostsNew);