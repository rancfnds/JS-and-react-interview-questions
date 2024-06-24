function fetchdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Corrected variable name
            if (success) {
                resolve("The data is true"); // Resolve with correct message
            } else {
                reject("Failed man"); // Reject with correct message
            }
        }, 2000);
    });
}

fetchdata()
    .then(response => {
        console.log(response); // Output: The data is true
    })
    .catch(error => {
        console.log(error); // Won't be called in this corrected example
    });
