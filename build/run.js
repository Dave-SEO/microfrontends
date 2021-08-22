const {spawn} = require('child_process');
const path = require('path')
const filePath = {
    vue2: path.resolve(__dirname, '../vue2'),
    vue3: path.resolve(__dirname, '../vue3'),
    react17: path.resolve(__dirname, '../react17')
    // server: path.resolve(__dirname, '../server')
}

const runChild = () => {
    Object.values(filePath).forEach(item => {
        spawn(`cd ${item} && npm run dev`, {stdio: 'inherit',shell: true})
    })
}
runChild()