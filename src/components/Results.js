import React from 'react'

//import Result from './Result'

function Results ({ results}) {
	return (
		<section className="results">
       <p>name : {results.name}</p>
       <p>gender : {results.gender}</p>
			
		</section>
	)
}

export default Results;
