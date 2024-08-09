const fs=require('fs');
const path=require('path');
const datadir=path.join(__dirname,'file')
if(!fs.existsSync(datadir))
    {
        fs.mkdirSync(datadir)
    }


function createfile(filename,data,callback){
    const filepath=path.join(datadir,filename);
    fs.writeFile(filepath,data,err=>{
        if(err){
            callback(err);
            return;
        }
        callback(null,"File has been created")
    });
}

function readfile(filename,callback){
    const filepath=path.join(datadir,filename);
    fs.readFile(filepath,'utf-8',(err,data)=>{
        if(err){
            callback(err)
            return;
        }
        callback(null,data)
    });
}

function updatefile(filename,newdata,callback){
    const filepath=path.join(datadir,filename);
    fs.writeFile(filepath,newdata,err=>{
        if(err){
            callback(err)
            return;
        }
        callback(null,"file is updated")
    });
}

function deletefile(filename,callback){
    const filepath=path.join(datadir,filename);
    fs.unlink(filepath,err=>{
        if(err){
            callback(err)
            return;
        }
        callback(null,"file deleted")
    });
}
function appendfile(filename,appdata,callback){
    const filepath=path.join(datadir,filename);
    fs.appendFile(filepath,appdata,err=>{
        if(err){
            callback(err);
            return;
        }
        callback(null,"file is appended")
    });
}   

const filename='A.txt';
const filedata='Hi'

createfile(filename,filedata,(err,message)=>{
    if(err){
        console.error("Error",err);
        return;
    }
    console.log(message);
    readfile(filename,(err,data)=>{
        if(err){
            console.error("Error",err);
        }
        console.log("File contents are: ",data);
        const newdata="hello world"
        updatefile(filename,newdata,(err,message)=>{
            if(err){
                console.error("Error",err);
                return;
            }
            console.log(message);
            readfile(filename,(err,data)=>{
                if(err){
                    console.error("Error",err);
                    return;
                }
                console.log("file contents are: ",data);
                const appdata="Good morning";
                appendfile(filename,appdata,(err,message)=>{
                    if(err){
                        console.error("Error",err);
                        return;
                    }
                    console.log(message)
                    readfile(filename,(err,data)=>{
                        if(err){
                            console.error("Error",err);
                            return;
                        }
                        console.log("file contents are: ",data);
                        deletefile(filename,(err,message)=>{
                            if(err){
                                console.error("Error",err);
                                return;
                            }
                            console.log(message)
                        });
                });
            });
        });

    });
});
});