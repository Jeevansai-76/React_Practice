import PropTypes from 'prop-types'

function Student({ name = "Guest", age = 0, isStudent = false }){
    return(
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

// Depricated propTypes
Student.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool,
}

//This way of usage depricated
// Student.defaultProps = {
//     name : "Guest",
//     age : 0,
//     isStudent : false,
// }

export default Student