// 5. Implement an example of a callback function.

const alertMessage = (messageString) => {
    alert(messageString)
}


// const alertMessage = function(messageString) {
//     alert(messageString)
// }

// function alertMessage(messageString) {
//     alert(messageString)
// }

const callackFunctionExample = (callback, message) => callback(message);

callackFunctionExample(alertMessage, 'This is an alert message') 