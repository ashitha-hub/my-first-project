const mammoth = require('mammoth');
const fs = require('fs');
mammoth.extractRawText({path: 'Ashitha H M.docx'}).then(function(result){
    fs.writeFileSync('resume_text.txt', result.value);
}).done();
