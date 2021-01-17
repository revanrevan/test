const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/test',
    {
        branch: 'master',
        repo: 'https://github.com/revanrevan/test.git',
        user: {
            name: 'revanrevan',
            email: 'revainblue21@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
);