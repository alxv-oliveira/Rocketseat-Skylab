const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});


async function executaPromise() {
    const response = await minhaPromise();

    console.log(response);
}

executaPromise();


// With Arrow Function

const executaPromise = async () => {
    console.log(await minhaPromise());
}

executaPromise();