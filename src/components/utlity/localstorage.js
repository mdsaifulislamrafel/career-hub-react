// const getStoredJobApplication = () => {
//     const storedJobApplication = localStorage.getItem('job-applications');
//     if (storedJobApplication) {
//         return JSON.parse(storedJobApplication);
//     }
//     return [];
// };

// const saveJobApplication = id => {
//     const storedJobApplication = getStoredJobApplication();
//     const exists = storedJobApplication.find(jobId => jobId === id)
//     if (!exists) {
//         storedJobApplication.push(id);
//         localStorage.setItem('job-applications', JSON.stringify(storedJobApplication));
//     }
// };

// export { getStoredJobApplication, saveJobApplication };















const pickItem = () => {
    const getItem = localStorage.getItem('job');
    if(getItem) {
        return JSON.parse(getItem);
    }
    return [];
};


const addLocalStorage = id => {
        const showData = pickItem();
        const exists = showData.find(itemId => itemId === id);
        if(!exists) {
            showData.push(id);
            localStorage.setItem('job', JSON.stringify(showData))
        }
};


export { pickItem, addLocalStorage };