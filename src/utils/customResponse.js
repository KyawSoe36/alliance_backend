const { StatusCodes } = require('http-status-codes');

const customResponse = (message, data, isError) => {
  if (isError) {
    return {
      status:"error",
      message: message,
    };

  } else {
    return {
      status: StatusCodes.OK,
      message: message || 'Success',
      data: data || null,
    };
  }
  
  };


  module.exports= customResponse;

