const errorHandler = (error, request, response, next) =>{

    console.error('Error:', error.message);
    response.status(500).json({msg: error.message});
    
    
};

export default errorHandler;