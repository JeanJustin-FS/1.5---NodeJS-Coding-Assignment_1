function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id: userId, name: 'User ' + userId };
        if (user) {
                resolve(user);
        } else {
                reject('User not found');
        }
    }, 1000);
    });
}
        

function fetchUserPosts(userId) {
            return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['Post 1', 'Post 2', 'Post 3'];
        if (posts) {
                resolve(posts);
        } else {
                reject('Posts not found');
    }
    }, 1000);
}); 
}
        
        
        function fetchPostComments(postId) {
            return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const comments = ['Comment 1', 'Comment 2'];
        if (comments) {
                resolve(comments);
        } else {
                reject('Commenets not found')
            }
        }, 1000);
    });
        }
    

fetchUserData(1).then(user => {
    console.log('User:', user);
    return fetchUserPosts(user.id);
})
.then (posts => {
    console.log('Posts:', posts);
    return fetchPostComments(posts[0]);
})
.then(comments => {
    console.log('Comments:', comments);
})
.catch(error => {
    console.log('Error', error.message);
});
